import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios';

export const RegistrationComponent = () => {
    const [user, setUser] = useState({
        userName: "",
        password: ""
    });
    let navigate = useNavigate()


    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value })
    }   

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(user);
        await axios.post("http://localhost:8080/saveUser", user);
        navigate("/login");
    }

    const goToLogin = ()=>{
        navigate("/login")
    }

    return (
        <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 border rounded p-4 mt-4 shadow">
                        <h1>User Registration</h1> 
                        <form onSubmit={(e) => onSubmit(e)}>
                            <div className="mb-3">
                                <label className="form-label ">Full Name</label>
                                <input type={"text"} name='userName' value={user.userName} onChange={handleInput} class="form-control" />
                            </div>

                            <div className="mb-5">
                                <label className="form-label" >Password</label>
                                <input type={"password"} name='password' value={user.password} onChange={handleInput} className="form-control" />
                            </div>

                            <div className="d-grid p-2" style={{ marginTop: '20px' }}>
                                <button type="submit" className="btn btn-success">Submit</button>&nbsp;
                                <button onClick={goToLogin} className="btn btn-primary ml-2" >Already User ?</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
    )
}
