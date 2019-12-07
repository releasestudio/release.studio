import React, {useCallback, useContext} from 'react';
import {withRouter, Redirect} from 'react-router';
import firebase from '../../firebase';
import {UserContext} from '../../UserContext';
import './Login.css';

export default function Login(){
    const { currentUser } = useContext(UserContext);

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
                    <label>
                        Email 
                        <input name="email" type="email" placeholder="Email" />
                    </label>
                    <lable>
                        Password 
                        <input name="password" type="password" placeholder="Password" />
                    </lable>
                    <button type="submit">Log in</button>
                </form>
            </div>
        </div>
    );
};