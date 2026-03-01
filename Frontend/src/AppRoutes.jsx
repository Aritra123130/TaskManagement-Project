import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LoginForm from './features/auth/pages/LoginForm.jsx'
import RegisterForm from './features/auth/pages/RegisterForm.jsx'
import Tasks from './features/tasks/pages/Taskpage.jsx'
import Feed from './features/tasks/pages/FeedPage.jsx'
const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
     <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/" element={<Tasks />} />
        <Route path='/feed' element = {<Feed />}/>
     </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRoutes
