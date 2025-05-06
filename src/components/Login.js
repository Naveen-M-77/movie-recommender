import React from 'react';
import { auth, provider } from '../firebase';
import { useHistory } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const history = useHistory();

    const signInWithGoogle = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                console.log('Signed in user:', result.user);
                history.push('/');
            })
            .catch((error) => {
                alert('Error signing in: ' + error.message);
            });
    };

    return (
        <div className="login">
            <h2>Welcome to Netflix Clone</h2>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
        </div>
    );
};

export default Login;