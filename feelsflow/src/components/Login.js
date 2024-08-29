import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './AuthForm.css'; // Make sure the path is correct

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Login with:', email, password);
    };

    return (
        <form onSubmit={handleSubmit} className="auth-form">
            <div>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <button type="submit">Login</button>
            <div>
                <p>Don't have an account? <Link to="/signup">Sign up</Link></p> {/* Link to Signup page */}
            </div>
        </form>
    );
};

export default Login;
