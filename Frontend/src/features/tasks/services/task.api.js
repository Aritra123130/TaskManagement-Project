import axios from "axios";


const api = axios.create({
    baseURL: 'http://localhost:3000/api/tasks',
    withCredentials:true
})

export async function getUser(){
    let res = await api.get('/');
    console.log(res);
    return res.data;
}

export async function createUser(title,description,prioritylevel,duedate){
    try{
        const res = await api.post('/', { title, description, prioritylevel, duedate });
        console.log(res);
        return res.data;
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export async function updateUser(description,id){
    try{
       const res = await api.patch(`/${id}`,{description});
       console.log(res.data);
       return res.data;
    } catch(err){
       console.log(err);
    }
}

export async function deleteUser(id){
    try{
       const res = await api.delete(`/${id}`);
       console.log(res.data);
    }catch(err){
        console.log(err);
    }
}