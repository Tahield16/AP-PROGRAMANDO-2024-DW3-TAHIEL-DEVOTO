import React, { useEffect, useState } from 'react';
import './UserList.css'
const UserList = () => {
const [users, setUsers] = useState([]);

useEffect(() => {
// Llamar a la función para obtener la lista de usuarios
fetchUsers();
}, []);

const fetchUsers = async () => {
try {
const response = await fetch('https://672cc0f4fd89797156400d6a.mockapi.io/users/users');
const data = await response.json();
setUsers(data);
} catch (error) {
console.error('Error en la solicitud:', error);
}
};

return (
<div>
<h2>Lista de Usuarios</h2>
{/* Mostrar lista de usuarios */}
<ol>
{users.map((user) => (
<li key={user.id}> {user.name} - {user.email}</li>
))}
</ol>
</div>
);
};

export default UserList;