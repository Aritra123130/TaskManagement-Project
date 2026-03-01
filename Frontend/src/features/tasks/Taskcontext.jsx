import React, { createContext, useState } from 'react'

export const TaskContext = createContext()

export const TaskContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [post, setPost] = useState(null)
  const [feed, setFeed] = useState([])

  return (
    <TaskContext.Provider value={{ loading, setLoading, post, setPost, feed, setFeed }}>
      {children}
    </TaskContext.Provider>
  )
}

export default TaskContextProvider




