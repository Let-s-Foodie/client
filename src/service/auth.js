class UserStorage {
    constructor(key) {
        this.key = key;
    }
    async loginUser(id,password){
       
       const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${this.key}`;
       console.log("id, password",id, password)
       const response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify({
                email:id,
                password: password,
                returnSecureToken: true
            }),
            headers: {
                'Content-Type': 'application/json',
            
            }
       })
       if(!response.ok){
           const errorMessage = "The email address or password you entered is incorrect.";
       
           const error = new Error(errorMessage)
           throw error;
       } 

       const user = await response.json();
       return user;
    }
    async checkRole(user){
        const url = "http://localhost:8000/users/signin";
        console.log("check user role",user)
        const roleCheck = await fetch(url, {
            body: JSON.stringify({data: user}),
            method: "POST",
            headers: {
                'Accept': 'application/json, text/plain, ',
                'Content-Type': 'application/json',
                "authtoken": user.idToken
            }
        })

        if(!roleCheck.ok){
            const error = new Error("Admin error")
           
            throw error;
        }
        console.log("rolecheck", roleCheck)
        const userAdmin = await roleCheck.json();
        return userAdmin;
    }
    async loginSeller(id,password){
        const user = await this.loginUser(id,password);
        const roles = await this.checkRole(user);
        return roles;
    }
    async signupFirebase(id, password) {
        const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${this.key}`;
     
            const response = await fetch(url,{
                method: 'POST',
                body: JSON.stringify({
                    email:id,
                    password: password,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            if(!response.ok){
                const errorMessage = await response.json().then(data =>
                    
                    data.error.errors[0].message 
                )
                throw new Error(errorMessage)
            }
            const success = await response.json();
            return success;
       
       

    }

    async signupLocal(data,role){
        const url = "http://localhost:8000/users/signup";
        const response = await fetch(url,{
            method: "POST",
            body: JSON.stringify({
                email: data.email,
                role: role
            }),
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            }
        })
        if(!response.ok) throw new Error("failed to update to local database");
       
        return response;

    }

   
}   

export default UserStorage;