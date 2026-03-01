import React from 'react'
import '../styles/styles.scss'
import { useState } from 'react'
import { useAuth } from '../Hooks/useAuth.js'
import { useNavigate } from 'react-router-dom'
const LoginForm = () => {
     
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    const { loginUser } = useAuth();
     const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        loginUser(email,password)
            navigate('/')
    }
  return (
    
      <main>
        <div className="form">
            <h1>Login Form</h1>

         <form className="form-container" onSubmit={handleSubmit}>
            <input type='text' name='email' placeholder="email" value = {email} onChange={(e)=>{setemail(e.target.value)}} />
            <input type="password" name="password" placeholder="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
            <button type="submit">Login</button>
         </form>
         
        </div>
        
      </main>
    
  )
}

export default LoginForm
