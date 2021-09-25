import {useState, useContext } from 'react';
import {useHistory} from 'react-router-dom';
import AuthContext from '../../store/auth-context';
import useInput from '../hooks/use-input';
import ErrorSeller  from './Error/ErrorSeller';
import ErrorAuth from './Error/ErrorAuth';


const emailPattern =  new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
const passwordPattern = new RegExp(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{8,}$/);
const isEmail = (value) => emailPattern.test(value);
const isPassword = (value) => passwordPattern.test(value);

const SellerAuth = () => {
    const [isAdmin, setAdmin] = useState(true);
    const [isLogin, setIsLogin ] = useState(true);
    const [errorMsg, setErrorMsg] = useState('');
    const authCtx = useContext(AuthContext);
    const history = useHistory();
    const [authError, setError] = useState(false);
  
    const cancleHandler = () => {
        setError(false);
    }
    const {
        value:enteredEmail,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail
    } = useInput(isEmail);

    const {
        value:enteredPassword,
        isValid: passwordIsValid,
        hasError: passwordHasError,
        valueChangeHandler: passwordChangeHandler,
        inputBlurHandler: passwordBlurHandler,
        reset: resetPassword
    } = useInput(isPassword);
    let formIsValid = false;
    if(emailIsValid && passwordIsValid){
        formIsValid = true;
    }
    const emailClasses = (emailIsValid || isLogin) ? "rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" : "rounded-sm px-4 py-3 mt-3 focus:outline-none bg-red-100 w-full";
    const passwordClasses = (passwordIsValid || isLogin)? "rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" : "rounded-sm px-4 py-3 mt-3 focus:outline-none bg-red-100 w-full";
    const buttonClasses = (!formIsValid) ? "block text-center text-white bg-gray-400 p-3 duration-300 rounded-sm hover:bg-black w-full" : "block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full";
    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
        setAdmin(true);
        setError(false);
    };
    class UserStorage {
        async loginUser(id,password){
            const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.REACT_APP_API_KEY}`;
            const response = await fetch(url,{
                method: 'POST',
                body: JSON.stringify({
                    email:id,
                    password:password,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json',
                }
            })

            if(!response.ok){
                const errorMessage = "The email address or password you entered is incorrect.";
                setErrorMsg(errorMessage);
                setError(true);
                const error = new Error(errorMessage);
                throw error;
            }

            const user = await response.json();
           
            const url2 = "http://localhost:8080/users/signin";
            const roleCheck = await fetch(url2, {
                body: JSON.stringify({data: user}),
                method: "POST",
                headers: {
                    'Accept': 'application/json, text/plain, ',
                    'Content-Type': 'application/json',
                    "authtoken": user.idToken
                }
            })
            if(!roleCheck.ok){
                setAdmin(false);
                const error = new Error("Admin error");
                throw error;
            }
            setAdmin(true);
            const userAdmin = await roleCheck.json();

            return userAdmin;
         
        }
        async signupFirebase(id,password){
            const url =`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.REACT_APP_API_KEY}`;
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
                setErrorMsg(errorMessage.toLowerCase().replace('_', " "))
                setError(true)
                throw new Error(errorMessage);
            }
            const user = await response.json();
            return user;
        }
        async signupLocal(data){
            const url = "http://localhost:8080/users/signup";
            const response = await fetch(url,{
                method: "POST",
                body: JSON.stringify({
                    email: data.email,
                    role: "seller"
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
    const submitHandler = (event) => {
        event.preventDefault();
       
        const userStorage = new UserStorage();
        //Add Validation
       
        
        if(isLogin) {
            //Check user's role 
               
            
           userStorage.loginUser(enteredEmail,enteredPassword)
            .then((data) => {
                const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000));
                authCtx.login(data.idToken, expirationTime.toISOString());
                history.replace("/seller/home"); 
            })
            .catch(console.log)
             
            resetEmail();
            resetPassword();
        } else {
            if(!formIsValid){
                return;
            }
            userStorage.signupFirebase(enteredEmail,enteredPassword)
                .then((data)=> {
                    userStorage.signupLocal(data);
                    history.replace('/seller');
                })
                .catch(console.log)
    
        }
            

        

    }
    return (
       
        <section>
          
            <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
                
                <div className="py-8 px-8 rounded-xl">
                    {authError ? <ErrorAuth msg={errorMsg} cancleHandler={cancleHandler}/> : <></>}
                   {isAdmin ? <></>: <ErrorSeller/>}
                   
                    <h1 className="font-medium text-2xl mt-3 text-center">{isLogin ? 'Login' : 'Create an Account'}</h1>
                    <form onSubmit={submitHandler} className="mt-6">
                        <div className="my-5 text-sm">
                            <label htmlFor="email" className="block text-black">Email</label>
                            <input 
                                type="email" 
                                autoFocus 
                                id="email" 
                                className={emailClasses}
                                placeholder="Email"
                                onChange={emailChangeHandler}
                                onBlur={emailBlurHandler} 
                               />
                                {!isLogin && emailHasError && <small>Email must be in valid format.</small>}
                        </div>
                        <div className="my-5 text-sm">
                            <label htmlFor="password" className="block text-black">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                className={passwordClasses} 
                                placeholder="Password" 
                               
                                onChange={passwordChangeHandler}
                                onBlur={passwordBlurHandler}
                                />
                                {!isLogin && passwordHasError && <small>Password must be at least 8 characters long contain a number and an upper case letter</small>}
                            <div className="flex justify-end mt-2 text-xs text-gray-600">
                           
                            </div>
                        </div>

                     {isLogin ? 
                        <button 
                            className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full" >
                            Login </button>
                            :   
                            <button 
                              
                                className={buttonClasses}
                                disabled={!formIsValid}
                                 >
                            Create  Account </button>    
                    }   
    
                    </form>

                    <div className="flex md:justify-between justify-center items-center mt-10">
                        <div style={{height: '1px'}} className="bg-gray-300 md:block hidden w-4/12"></div>
                        <p className="md:mx-2 text-sm font-light text-gray-400"> Login With Social </p> 
                        <div style={{height: '1px'}} className="bg-gray-300 md:block hidden w-4/12"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-2 mt-7">
                        <div>
                            <button className="text-center w-full text-white bg-blue-900 p-3 duration-300 rounded-sm hover:bg-blue-700">Facebook</button>
                        </div>
                        <div>
                            <button className="text-center w-full text-white bg-blue-400 p-3 duration-300 rounded-sm hover:bg-blue-500">Twitter</button>
                        </div>
                    </div>

                    {isLogin ? 
                    <p className="mt-12 text-xs text-center font-light text-gray-400"> New to Randi? <button onClick={switchAuthModeHandler} className="text-blue font-medium"> Sign Up </button>  </p> 
                    :<p className="mt-12 text-xs text-center font-light text-gray-400"> Already have an account? <button onClick={switchAuthModeHandler} className="text-blue font-medium"> Sign In </button>  </p> 
}
                </div>
            </div>
        </section>
    )
}
export default SellerAuth;