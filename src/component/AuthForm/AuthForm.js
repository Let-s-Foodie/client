import {useState, useRef, useContext } from 'react';

import classes from './AuthForm.module.css';
import AuthContext from '../../store/auth-context';

const AuthForm = () => {
    const [isLogin, setIsLogin ] = useState(true);
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const authCtx = useContext(AuthContext);


    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };
    const submitHandler = (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        //Add Validation
        let url;
        if(isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDSqPwVXMpohF0vOm95pZ6kadMTQ8fd6w8';
        } else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDSqPwVXMpohF0vOm95pZ6kadMTQ8fd6w8';
        }
            fetch(url,
            {
                method: 'POST',
                body: JSON.stringify({
                    email:enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            ).then((res) => {
                if(res.ok){
                    return res.json()
                } else {
                    return res.json().then((data)=> {
                       //show error modal
                       let errorMessage = 'Authentication Failed';
                      throw new Error(errorMessage);
                    })
                }
            }).then((data)=> {
                authCtx.login(data.idToken);
                console.log(authCtx.token)
               // console.log(data.idToken)
            })
            .catch((err)=> {
                alert(err.message);
            })

        

    }
    return (
        <section>
          
            <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
                <div className="py-8 px-8 rounded-xl">
    <h1 className="font-medium text-2xl mt-3 text-center">{isLogin ? 'Login' : 'Create an Account'}</h1>
                    <form onSubmit={submitHandler} className="mt-6">
                        <div className="my-5 text-sm">
                            <label htmlFor="email" className="block text-black">Email</label>
                            <input 
                                type="email" 
                                autoFocus 
                                id="email" 
                                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" 
                                placeholder="Email" 
                                ref={emailInputRef}/>
                        </div>
                        <div className="my-5 text-sm">
                            <label htmlFor="password" className="block text-black">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" 
                                placeholder="Password" 
                                ref={passwordInputRef}/>
                            <div className="flex justify-end mt-2 text-xs text-gray-600">
                           
                            </div>
                        </div>

    <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">{isLogin ? 'Login' : 'Create Account'}</button>
    <button 
        type='button'
        className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full"
        onClick={switchAuthModeHandler}>
        {isLogin ? 'Create new account' : 'Login with existing account'}
    </button>
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

                    <p className="mt-12 text-xs text-center font-light text-gray-400"> Already have an account? <a href="../auth/register.html" className="text-black font-medium"> Sign In </a>  </p> 

                </div>
            </div>
        </section>
    )
}
export default AuthForm;