import React, { useState } from 'react';
import UserList from './UserList'
import './UserForm.css'
const UserForm = ({ addUser }) => {
const [name, setName] = useState('');
const [email, setEmail] = useState('');

const handleSubmit = () => {
// Validar datos antes de agregar
const newUser = { name, email };
// Llamar a la función desde las props para agregar usuario
addUser(newUser);
};

return (
  <>
    <div className="Form-container">
      <h2>Agregar Usuario</h2>
      <div>
        <label>Nombre: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label>Email: </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <br />
      <button className="functions-buttons" onClick={handleSubmit}>
        Agregar
      </button>
    </div>
    <div className="Form-container">
        <UserList></UserList>
    </div>
  </>
);
};

export default UserForm;

