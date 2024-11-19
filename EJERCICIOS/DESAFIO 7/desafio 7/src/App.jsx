import { useState } from 'react'
import UserForm from './Functionalaty/UserForm'

import './App.css'

const App = () => {
  const [users, setUsers] = useState([]);
  
  const  addUser = async (newUser) => {
  // Agregar nuevo usuario al estado
  try {
  const response = await fetch('https://672cc0f4fd89797156400d6a.mockapi.io/users/users', {
  method: 'POST',
  headers: {
  'Content-Type': 'application/json',
  },
  body: JSON.stringify(newUser),
  });
  if (response.ok) {
  // Obtener la respuesta y agregar usuario al estado
  const data = await response.json();
  setUsers([...users, data]);
  } else {
  console.error('Error al agregar usuario');
  }
  } catch (error) {
  console.error(
  console.error('Error en la solicitud: ', error))
  }
  };
  
  return (
    <>
    <div>
  <UserForm addUser={addUser} />
  {/* Mostrar lista de usuarios */}
  <ul>
  {users.map((user, index) => (
    <li key={index}>{user.name} - {user.email}</li>
  ))}
  </ul>
  </div>
  <div>

  

  </div>
  </>
  );
  };
  
  export default App;
