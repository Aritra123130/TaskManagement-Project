import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from './AppRoutes'
import './styles.scss'
import { AuthProvider } from './features/auth/auth.context'
import {TaskContextProvider} from './features/tasks/Taskcontext'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <AuthProvider>
      <TaskContextProvider>
    <AppRoutes/>
    </TaskContextProvider>
    </AuthProvider>
  )
}

export default App
