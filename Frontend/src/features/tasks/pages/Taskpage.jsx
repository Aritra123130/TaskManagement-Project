import React, { useState } from 'react'
import '../styles/styles.scss'
import { usePost } from '../hooks/usePost'
import { useNavigate } from 'react-router-dom';
const Taskpage = () => {
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [prioritylevel, setprioritylevel] = useState('');
    const [date, setdate] = useState('')
       const {handlecreatepost} = usePost(); 
       const navigate = useNavigate();
      async function handleSubmit(e){
            e.preventDefault();
            try{
               await handlecreatepost(title,description,prioritylevel,date);
               navigate('/feed');
            } catch(err){
               console.log(err);
            }
      }
  return (
     <main>
        <div className="task-container">
       

        <form onSubmit={handleSubmit}>
                 <h1>Task Page</h1>
                <input type="text" name="title" placeholder="Task Title" value={title} onChange={(e)=>{settitle(e.target.value)}} />
                <input type="text" name="description" placeholder="Task Description" value={description} onChange={(e)=>{setdescription(e.target.value)}}/>
                <input type="text" name="prioritylevel" placeholder="Task Priority Level" value={prioritylevel} onChange={(e)=>{setprioritylevel(e.target.value)}}/>
                <input type="date" name="duedate" placeholder="Task Due Date" value={date} onChange={(e)=>{setdate(e.target.value)}}/>
                <button type="submit">Create Task</button>
          
        </form>
          </div>
     </main>
  )
}

export default Taskpage
