//import React from 'react'
import '../style.css'
import './LoginPage.css'
import * as React from "react";
import {
  useHistory
} from "react-router-dom";

export default function LoginForm(props) {
    const { onLoginSuccess } = props;
    const history = useHistory();
    const login = () => {
        const token = "testtoken";
        //const email = document.getElementsByName('email').value;
        const email = "testemail";
        window.localStorage.setItem("token", token);
        window.localStorage.setItem("email", email);
    
        onLoginSuccess(token);
        history.push("/");
      };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = new FormData(e.target);
        const response = await fetch("/login", {method:"POST", body:body});
        const data = await response.json();
        
        //const tokenStorage = window.localStorage; 
        
        if(response.ok){
            console.log(data.token);
            //tokenStorage.setItem('token', data.token);    
        }       
    }

    return (
        <div className="loginForm-container">
            <form className = "form-login" action="" onSubmit = {handleSubmit}>
                    <div class= "loginForm-group">
                        <p> Adresse e-mail </p>
                        <input type="email" name="email" placeholder="mail@provider.com"></input>
                    </div>

                    <div class= "loginForm-group">
                        <p>Mot de passe</p>
                        <input type="password" name="password" placeholder="password"></input>
                    </div>

                    <p className="loginForm-text-warning">Mot de passe incorrect</p>
                    <button className ="button" onClick= {login} type="submit"> Connexion </button>    

                    <p className="loginForm-text">J'ai oublié mon mot de passe</p>
                    <p className="loginForm-text">Pas encore de compte ? Inscrivez-vous !</p>               
            </form>
        </div>
    );    
}
