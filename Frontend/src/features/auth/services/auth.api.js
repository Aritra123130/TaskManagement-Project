import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:3000/api/auth',
    withCredentials:true
})

export async function login(email,password){
    try{
      const response  = await api.post('/login',{email,password});
      console.log(response.data);
      return response.data;
    }catch(err){
       console.log(err);
    }
}

export async function register(username,email,password){
    try{
       const registerresponse = await api.post('/register',{username,email,password});
       console.log(registerresponse.data);
       return registerresponse.data;
    }catch(err){
        console.log(err);
    }
}
