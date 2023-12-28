import React from 'react'
import { Route,BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './pages/Login';
import TodoSetup from './pages/TodoSetup';
import SignUp from './pages/SignUp';

const App = () => {
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/todo/:id' element={<TodoSetup />}/>
      <Route path='/signUp' element={<SignUp/>}/>
    </Routes>
   </Router>
  )
}

export default App;


