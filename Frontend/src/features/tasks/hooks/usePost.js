import { createUser, getUser ,updateUser,deleteUser} from "../services/task.api";
import { useContext, useEffect } from "react";
import { TaskContext } from "../Taskcontext";

export const usePost = () => {
  const context = useContext(TaskContext);
  const { loading, setLoading, feed, setFeed } = context;

  const handlegetfeed = async () => {
    setLoading(true);
    try {
      const response = await getUser();
      setFeed( response.tasks || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const handlecreatepost = async (title, description, prioritylevel, duedate) => {
    setLoading(true);
    try {
      const response = await createUser(title, description, prioritylevel, duedate);
      await handlegetfeed();
      return response.task;
    } catch (err) {
      console.log(err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handlegetfeed();
  }, []);

  const handleupdateUser = async (description,id)=>{
    try{
        const response  = await updateUser(description,id);
    await handlegetfeed();
    return response.task
    } catch(err){
       console.log(err);
    }
    
  }
  const handledeleteUser = async (id)=>{
    try{
      const response  = await deleteUser(id);
      await handlegetfeed();
      return response.task;
    }catch(err){
      console.log(err);
    }
  }
  return {
    loading,
    feed,
    handlegetfeed,
    handlecreatepost,
    handleupdateUser,
    handledeleteUser
  };
};