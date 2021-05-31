import React from 'react'
import '../../style.css'
import './SignupForm.css'


export default function SignupForm() {

    <h1>Formulaire SIGNUP</h1>
    const handleSubmit = async (e) => {
        e.preventDefault();
        const body = new FormData(e.target);
        const response = await fetch("/signup", {method:"POST", body:body});
        const data = await response.json();
        console.log(data);
    }

    return (
        <div className="signupForm-container">
            <form className = "signupForm" action="" onSubmit = {handleSubmit}>
                <div class= "signupForm-group">
                    <p> Adresse e-mail </p>
                    <input type="email" name="email" placeholder="mail@provider.com"></input>
                </div>

                <div class= "signupForm-group">
                    <p>Mot de passe</p>
                    <input type="password" name="password" placeholder="password"></input>
                </div>

                <div class= "signupForm-group">
                    <p>Répéter le mot de passe</p>
                    <input type="password" name="password" placeholder="password"></input>
                </div>

                <button className = "button" type="submit"> Se connecter </button>    
            </form>
        </div>
    )
    
}
