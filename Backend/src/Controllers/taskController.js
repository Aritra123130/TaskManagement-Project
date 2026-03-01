const taskModel =  require('../models/task.model');


async function createTask(req,res){
    const {title,description,prioritylevel,duedate} = req.body;

    const isTaskExist = await taskModel.findOne({
        title:title,
        description:description,
        prioritylevel:prioritylevel,
        duedate:duedate,
        user:req.user.id
    })
    if(isTaskExist){
        res.status(400).json({
            message:'Task already exist'
        })


    }
    const newTask = await taskModel.create({
        title:title,
        description:description,
        prioritylevel:prioritylevel,
        duedate:duedate,
        user:req.user.id
    })
    res.status(201).json({
        message:'Task created successfully',
        task:newTask
    })

}

async function getAlltasks(req,res){
    
       console.log("REQ USER ID:", req.user?.id);

    const tasks = await taskModel.find({user:req.user.id});
    res.status(200).json({
        message:'Tasks retrieved successfully',
        tasks:tasks
    })
}

async function updateTask(req,res){
   const {description} = req.body;
   const task = await taskModel.findById(req.params.id);
   if(!task){
    res.status(404).json({
        message:'Task not found'
    })
   }
   const updatedTask =  await taskModel.findByIdAndUpdate({_id:req.params.id,user:req.user.id},{
    description:description
   },{new:true})
   res.status(200).json({
    message:'Task updated successfully',
    task:updatedTask
   })
}

async function deleteTask(req,res){
     const id = req.params.id;
     const task =  await taskModel.findByIdAndDelete({_id:id,user:req.user.id});
    res.status(200).json({
        message:'Task deleted successfully',
        task:task
    })
}

 
module.exports = {
    createTask,
    getAlltasks,
    updateTask,
    deleteTask
}