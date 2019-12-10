import React, {useCallback, useState} from 'react';
import firebase from '../../firebase';
import './Login.css';

export default function Login(){
    const[error, setError] = useState(" ");
    const [isLoading, setIsLoading] = useState(false)
    
    const handleLogin = useCallback(
        async event => {
            event.preventDefault();
            const { email, password } = event.target.elements;
            try {
                setIsLoading(true);
                setError(" ")
                await firebase
                    .auth()
                    .signInWithEmailAndPassword(email.value, password.value);
            } catch (error) {
                setError("Email or password incorect")
            }
            setIsLoading(false);
        },
        []
    );

    return (
        <div className="LoginPage">
            <div className="LoginModule">
                <h1>Log in</h1>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleLogin}>
                    <input name="email" type="email" placeholder="Email" />
                    <input name="password" type="password" placeholder="Password" />
                    <button type="submit" disabled={isLoading}>{isLoading ? "Loading...":"Log in"}</button>
                </form>
            </div>
        </div>
    );
};