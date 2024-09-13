import React, { useState } from 'react';
   import axios from 'axios';
   import { useNavigate } from 'react-router-dom';

   const Login = () => {
     const [username, setUsername] = useState('');
     const [password, setPassword] = useState('');
     const navigate = useNavigate();

     const handleLogin = async (e) => {
       e.preventDefault();
       try {
         const response = await axios.post('/api/auth/login', { username, password });
         localStorage.setItem('token', response.data.token);
         navigate('/');
       } catch (error) {
         console.error('Error logging in:', error);
       }
     };

     return (
       <div className="container mx-auto p-4">
         <h1 className="text-2xl font-bold mb-4">Login</h1>
         <form onSubmit={handleLogin} className="max-w-sm mx-auto">
           <input
             type="text"
             placeholder="Username"
             value={username}
             onChange={(e) => setUsername(e.target.value)}
             className="p-2 border rounded mb-2"
             required
           />
           <input
             type="password"
             placeholder="Password"
             value={password}
             onChange={(e) => setPassword(e.target.value)}
             className="p-2 border rounded mb-2"
             required
           />
           <button type="submit" className="p-2 bg-blue-500 text-white rounded">Login</button>
         </form>
       </div>
     );
   };

   export default Login;