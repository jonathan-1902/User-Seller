import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Create from './Create';
import Delete from './Delete';
import Edit from './Edit';
import Home from './Home';
import Login from './Login';
import Register from './Register';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/edit/:id' element={<Edit />}></Route>
        {/* <Route path='/delete' element={<Delete />}></Route> */}
        <Route path='/create' element={<Create />}></Route>
      </Routes>
    </>
  );
}

export default App;
