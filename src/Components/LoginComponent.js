import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


export const LoginComponent = () => {

    const[user,setUser]=useState({
        userName:"",
        password:""
    });

    const navigate = useNavigate();

    const handleInput=(e)=>{
        const{name,value}=e.target;
        setUser({...user,[name]:value})
    }


    const onSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post("http://localhost:8080/loginUser", user);
          console.log(response.data);
          console.log(response.data.id);
          if (response.status === 200) {
            navigate("/landingPage/" + response.data.id); // Correct usage of navigate
          }
        } catch (error) {
          console.error("There was an error logging in:", error);
        }
      };
      


    return (

        <div class="container d-flex justify-content-center align-items-center min-vh-100">


            <div class="p-4 shadow">
                <h2 class="card-title text-center">Login</h2>
                <form onSubmit={(e)=>onSubmit(e)}> 
                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" name='userName' value={user.userName} onChange={handleInput} placeholder="Enter your username" />
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" name='password' value={user.password} onChange={handleInput} placeholder="Enter your password" />
                    </div>
                    <div className="mt-2">
                        <button type="submit" class="btn btn-primary w-100 my-2" style={{ marginTop: '20px' }} >Login</button>
                    </div>
                </form>
            </div>
            
        </div>

    )
}
