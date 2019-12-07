import React, {useCallback, useContext} from 'react';
import {withRouter, Redirect} from 'react-router';
import firebase from '../../firebase';
import {AuthContext} from './Auth';

const login = ({  history }) => {
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
                history.push("/");
            } catch (error) {
                alert(error);
            }
        },
        [history]
    );

    const { currentUser } = userContext(AuthContext)

    if (currentUser) {
        return <Redirect to="/" />
    }

    return (
        <div>
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
    );
};

export default withRouter(Login);