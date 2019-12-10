import React, {useCallback, useState} from 'react';
import firebase from '../../firebase';
import './Login.css';

export default function Login(){
    
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
            } catch (error) {
                alert(error);
            }
        },
        []
    );

    return (
        <div className="LoginPage">
            <div className="LoginModule">
                <h1>Log in</h1>
                <form onSubmit={handleLogin}>
                    <input name="email" type="email" placeholder="Email" />
                    <input name="password" type="password" placeholder="Password" />
                    <button type="submit">Log in</button>
                </form>
            </div>
        </div>
    );
};