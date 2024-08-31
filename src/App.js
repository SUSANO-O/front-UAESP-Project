import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Oportunidades from './components/Oportunidades';
import Gestion_de_riesgo_de_corrupcion from './components/Gestion_de_riesgo_de_corrupcion';
import Gestion_de_riesgo from './components/Gestion_de_riesgo';
import Riesgos_de_seguridad from './components/Riesgos_de_seguridad';
import Login from './components/Login';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [chatVisible, setChatVisible] = useState(false);

    const toggleMenu = () => setMenuVisible(!menuVisible);
    const toggleChat = () => setChatVisible(!chatVisible);
    const handleLogout = () => {
        setIsAuthenticated(false);
    };

    return (
        <Router>
            <div>
                {/* Navbar */}
                <nav style={{ display: 'flex', alignItems: 'center', padding: '10px', backgroundColor: '#333', position: 'relative' }}>
                    <Link to="/" style={{ marginRight: '20px' }}>
                        <img 
                            src="/img/logo.png" // Ruta a la imagen local en la carpeta public
                            alt="Logo" 
                            style={{ height: '40px' }} 
                        />
                    </Link>
                    <ul style={{ listStyle: 'none', display: 'flex', margin: 0, padding: 0, flexGrow: 1 }}>
                        <li style={{ marginRight: '10px' }}>
                            <Link 
                                to="/Oportunidades" 
                                style={{
                                    color: '#fff', 
                                    textDecoration: 'none', 
                                    padding: '5px', 
                                    borderRadius: '4px'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0ad4e'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                                Oportunidades
                            </Link>
                        </li>
                        <li style={{ marginRight: '10px' }}>
                            <Link 
                                to="/Gestion_de_riesgo_de_corrupcion" 
                                style={{
                                    color: '#fff', 
                                    textDecoration: 'none', 
                                    padding: '5px', 
                                    borderRadius: '4px'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0ad4e'} 
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                                Riesgo de corrupcion
                            </Link>
                        </li>
                        <li style={{ marginRight: '10px' }}>
                            <Link 
                                to="/Gestion_de_riesgo" 
                                style={{
                                    color: '#fff', 
                                    textDecoration: 'none', 
                                    padding: '5px', 
                                    borderRadius: '4px'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0ad4e'} 
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                                Gestion de riesgo
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/Riesgos_de_seguridad" 
                                style={{
                                    color: '#fff', 
                                    textDecoration: 'none', 
                                    padding: '5px', 
                                    borderRadius: '4px'
                                }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f0ad4e'} 
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                            >
                                Riesgos de seguridad
                            </Link>
                        </li>
                    </ul>
                    {isAuthenticated && (
                        <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
                            <i 
                                className="fas fa-user" 
                                style={{ color: '#fff', fontSize: '24px', cursor: 'pointer' }} 
                                onClick={toggleMenu}
                            ></i>
                            <span style={{ color: '#fff', marginLeft: '10px' }}>Hackaton</span>
                            {menuVisible && (
                                <div 
                                    style={{ 
                                        position: 'absolute', 
                                        top: '100%', 
                                        right: '0', 
                                        backgroundColor: '#fff', 
                                        color: '#333', 
                                        border: '1px solid #ddd', 
                                        borderRadius: '4px', 
                                        padding: '10px', 
                                        boxShadow: '0px 4px 6px rgba(0,0,0,0.1)', 
                                        zIndex: '1000'
                                    }}
                                >
                                    <button 
                                        onClick={handleLogout} 
                                        style={{ 
                                            background: 'none', 
                                            border: 'none', 
                                            color: '#007bff', 
                                            cursor: 'pointer', 
                                            padding: '5px', 
                                            textAlign: 'left', 
                                            width: '100%'
                                        }}
                                    >
                                        Salir
                                    </button>
                                </div>
                            )}
                        </div>
                    )}
                    <button 
                        onClick={toggleChat} 
                        style={{
                            background: 'none', 
                            border: 'none', 
                            cursor: 'pointer', 
                            color: '#fff', 
                            fontSize: '24px', 
                            marginLeft: '20px'
                        }}
                    >
                        <img 
                            src="/img/chat-icon.png" // Ruta a la imagen local en la carpeta public
                            alt="Chat"
                            style={{ height: '24px' }}
                        />
                    </button>
                </nav>

                {/* Banner */}
                <Routes>
                    <Route 
                        path="/" 
                        element={isAuthenticated ? (
                            <div style={{ textAlign: 'center', margin: '20px 0' }}>
                                <img 
                                    src="/img/banner.png" // Ruta a la imagen local en la carpeta public
                                    alt="Banner"
                                    style={{ width: '100%', height: 'auto' }}
                                />
                            </div>
                        ) : (
                            <Navigate to="/login" />
                        )}
                    />
                    <Route 
                        path="/login" 
                        element={<Login setIsAuthenticated={setIsAuthenticated} />} 
                    />
                    <Route 
                        path="/Oportunidades" 
                        element={isAuthenticated ? <Oportunidades /> : <Navigate to="/login" />} 
                    />
                    <Route 
                        path="/Gestion_de_riesgo_de_corrupcion" 
                        element={isAuthenticated ? <Gestion_de_riesgo_de_corrupcion /> : <Navigate to="/login" />} 
                    />
                    <Route 
                        path="/Gestion_de_riesgo" 
                        element={isAuthenticated ? <Gestion_de_riesgo /> : <Navigate to="/login" />} 
                    />
                    <Route 
                        path="/Riesgos_de_seguridad" 
                        element={isAuthenticated ? <Riesgos_de_seguridad /> : <Navigate to="/login" />} 
                    />
                </Routes>

                {/* Chat Box */}
                {chatVisible && (
                    <div style={{
                        position: 'fixed',
                        bottom: '20px',
                        right: '20px',
                        width: '300px',
                        backgroundColor: '#fff',
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        boxShadow: '0px 4px 8px rgba(0,0,0,0.2)',
                        padding: '10px',
                        display: 'flex',
                        flexDirection: 'column',
                        zIndex: '1000'
                    }}>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '10px'
                        }}>
                            <h4 style={{ margin: 0 }}>Chat</h4>
                            <button 
                                onClick={toggleChat} 
                                style={{ 
                                    background: 'none', 
                                    border: 'none', 
                                    color: '#f00', 
                                    fontSize: '20px', 
                                    cursor: 'pointer'
                                }}
                            >
                                &times;
                            </button>
                        </div>
                        <div style={{
                            flex: '1',
                            overflowY: 'auto',
                            borderBottom: '1px solid #ddd',
                            paddingBottom: '10px',
                            marginBottom: '10px'
                        }}>
                            {/* Mensajes del chat */}
                            <p><strong>Soporte:</strong> Hola, ¿cómo puedo ayudarte?</p>
                            <p><strong>Hackaton:</strong> Hola, necesito ayuda con mis formularios.</p>
                        </div>
                        <input 
                            type="text" 
                            placeholder="Escribe un mensaje..." 
                            style={{
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                padding: '10px',
                                fontSize: '14px',
                                outline: 'none'
                            }}
                        />
                    </div>
                )}
            </div>
        </Router>
    );
}

export default App;
