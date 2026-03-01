import React from 'react'
import '../styles/styles.scss'
import { useState } from 'react'
import { useAuth } from '../Hooks/useAuth.js'
import { useNavigate } from 'react-router-dom'
const RegisterForm = () => {
    
     const [username, setusername] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const { registerUser } = useAuth();
    const navigate = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        registerUser(username,email,password);
        navigate('/');
    }
  return (
    <main>
        <div className="form">
            <h1>Register Form</h1>

         <form className="form-container" onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="username" value = {username} onChange={(e)=>{setusername(e.target.value)}} />
            <input type='text' name='email' placeholder="email" value = {email} onChange={(e)=>{setemail(e.target.value)}}  />
            <input type="password" name="password" placeholder="password" value = {password} onChange={(e)=>{setpassword(e.target.value)}} />
            <button type="submit">Register</button>
         </form>
         
        </div>
        
      </main>
  )
}

export default RegisterForm
