import React,{useState} from 'react';
import './Login.css';
import { Link, useHistory} from 'react-router-dom';
import {auth} from "./Firebase";

function Login() {
    const history =useHistory();
    const [email, setEmail]= useState('');
    const[password,setPassword]=useState('');

    const signIn =e=>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{console.log(auth)
        if(auth){
            history.push('/')
        }})
        .catch(error=>alert(error.message))

        //firebase codes
    }
    const register =e=>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{console.log(auth)
        if(auth){
            history.push('/')
        }
        })
        .catch(error => alert(error.message))

        //firebase codes
    }
    return (
        <div className="login">
        <Link to="/">
        <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
         </Link> 
         <div className="login__container">
         <h1>Sign-In</h1>

         <form>
         <h5> Email</h5>
         <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
         <h5>Password</h5>
         <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
         <button className="login__signInButton" type="submit" onClick={signIn} >Sign In</button>
         </form>

         <p>By signing-in you agree to the Amazon fake Clone Conditions of Use & sale.PLease see our Privacy notice,our Cookies notice and our  Interest-Based Ads Notice    </p>
         <button className="login__registerButton" onClick={register}>Create your Amazon account</button>
         </div>  
        </div>
    )
}

export default Login