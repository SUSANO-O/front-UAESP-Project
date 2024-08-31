// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({ setIsAuthenticated }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        // Validación simple: el nombre de usuario debe ser 'admin' y la contraseña 'password'
        if (username === 'admin' && password === '1234') {
            setIsAuthenticated(true);
            navigate('/'); // Redirige al usuario a la página principal
        } else {
            setError('Nombre de usuario o contraseña incorrectos');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form 
                onSubmit={handleLogin} 
                style={{
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    padding: '20px',
                    boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
                    width: '300px',
                    backgroundColor: '#fff'
                }}
            >
                <h2 style={{ margin: '0 0 20px 0' }}>Iniciar Sesión</h2>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="username">Nombre de usuario</label>
                    <input 
                        type="text" 
                        id="username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        style={{ 
                            width: '100%', 
                            padding: '8px', 
                            borderRadius: '4px', 
                            border: '1px solid #ddd' 
                        }}
                    />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        type="password" 
                        id="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        style={{ 
                            width: '100%', 
                            padding: '8px', 
                            borderRadius: '4px', 
                            border: '1px solid #ddd' 
                        }}
                    />
                </div>
                <button 
                    type="submit" 
                    style={{ 
                        width: '100%', 
                        padding: '10px', 
                        border: 'none', 
                        borderRadius: '4px', 
                        backgroundColor: '#007bff', 
                        color: '#fff', 
                        cursor: 'pointer' 
                    }}
                >
                    Iniciar Sesión
                </button>
            </form>
        </div>
    );
};

export default Login;
