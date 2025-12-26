import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Register from './components/Register'
import StudentList from './components/StudentList'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  <Navbar/>
       <Routes>
         <Route path="/" element={<Home/>}></Route>
         <Route path="/register" element={<Register/>}></Route>
         <Route path="/student_list" element={<StudentList/>}></Route>
         <Route path="/login" element={<Login/>}></Route>
       </Routes>
    </>
  )
}

export default App
