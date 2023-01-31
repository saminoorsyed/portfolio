// import dependencies
import React from 'react';
// import components


export default function LoginPage(){
    return(
        <section>
            <h1>Login or Sign up! </h1>
            <p> Login</p>
            <form className='contact'>
                <input
                    type={"text"}
                    placeholder = "user name"
                    id="user name" 
                    required/>
                <input
                    type={"text"}
                    placeholder = "Password"
                    id="password" 
                    required/>
                <button>Login!</button>
            </form>
            <p> Sign up</p>
            <form className='contact'>
                <input
                    type={"text"}
                    placeholder = "user name"
                    id="username" 
                    required/>
                <input
                    type={"text"}
                    placeholder = "first name"
                    id="fname" 
                    required/>
                <input
                    type={"text"}
                    placeholder = "last name"
                    id="lname" 
                    required/>
                <input
                    type={"email"}
                    placeholder = "email address"
                    id="email" 
                    required/>
                <input
                    type={"text"}
                    placeholder = "Password"
                    id="password" 
                    required/>
                <input
                    type={"text"}
                    placeholder = "confirm Password"
                    id="confirm password" 
                    required/>
                <button>Sign up!</button>
            </form>
        </section>
    )
}