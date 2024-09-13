import React from 'react';
   import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
   import Dashboard from './components/Dashboard';
   import Register from './components/Register';
   import Login from './components/Login';
   import PrivateRoute from './components/PrivateRoute';
   import { RecoilRoot } from 'recoil';

   function App() {
     return (
       <RecoilRoot>
         <BrowserRouter>
           <Routes>
             <Route path="/register" element={<Register />} />
             <Route path="/login" element={<Login />} />
             <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
           </Routes>
         </BrowserRouter>
       </RecoilRoot>
     );
   }

   export default App;