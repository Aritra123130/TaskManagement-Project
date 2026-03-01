import React, { useState,useRef } from 'react'
import '../styles/feed.scss'
import {usePost} from '../hooks/usePost'
// import task from '../../../../../Backend/src/models/task.model'
// import {useRef} from 'react'
const FeedPage = () => {
  // const [liked, setLiked] = useState(false)
  // const [description, setdescription] = useState('')

//   const dummyTask = {
//     title: 'Finish project report',
//     description:
//       'Compile final results, update charts and prepare slides for the demo.',
//     priority: 'High',
//     dueDate: '2026-03-05',
//   }

const inputRefs = useRef({});

const {feed,loading,handleupdateUser,handledeleteUser} = usePost();
// console.log(feed);

async function hadleupdate(id){
    const description  = inputRefs.current[id].value;
  try{
    await handleupdateUser(description ,id);
  }catch(err){
    console.log(err);
  }

}

async function handleDelete(id){
  try{
     await handledeleteUser(id);
  }catch(err){
    console.log(err);

  }
}

   feed.forEach((task)=>{
    console.log( task.title);
   })

  return (
    <main className="feed-root">
      <h2 className="feed-title">Feed</h2>

      <section className="task-feed">
  {loading && <p>Loading...</p>}

  {feed.map((task) => (
    <article className="task-card" key={task._id}>
      <div className="task-header">
        <h3 className="task-title">{task.title}</h3>
      </div>
      <p>{task.description}</p>
      <p>Priority: {task.prioritylevel}</p>
      <input ref={(el) => (inputRefs.current[task._id] = el)} id ={task._id}type="text"  placeholder='Enter description' name='description' />
      <button onClick={()=>{hadleupdate(task._id)}}>Change Description</button>
      
      <p>Due: {task.duedate}</p>
      <button onClick={()=>{handleDelete(task._id)}}>Delete Task</button>
    </article>
   
  ))}
</section>
    </main>
  )
}

export default FeedPage
