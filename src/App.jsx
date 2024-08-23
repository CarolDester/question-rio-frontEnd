import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [registration, setRegistration] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nome de usuário: ${username}\nMatrícula: ${registration}`);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Formulário de Registro</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Nome de usuário:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={{ marginLeft: '10px' }}
            />
          </label>
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>
            Matrícula:
            <input
              type="text"
              value={registration}
              onChange={(e) => setRegistration(e.target.value)}
              required
              style={{ marginLeft: '10px' }}
            />
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
