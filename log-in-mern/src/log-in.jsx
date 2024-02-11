import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";


function Login() {

    
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const navigate = useNavigate()

    const submitForm = (event)  => {
        event.preventDefault()
        axios.post('http://localhost:3001/login',{email,password})
        .then(result => {console.log(result);
            if (result.data === "Success") {
                navigate('/register')
            } 
        })
        .catch(err=> console.log(err));

    } 
    


    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-3 rounded w-25">
                <h2>Login</h2>
                <form onSubmit={submitForm}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input 
                        type="text"
                        placeholder="Enter e-mail"
                        autoComplete="off"
                        name="email"
                        className="form-control rounded-6"
                        onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input 
                        type="password"
                        placeholder="Enter password"
                        autoComplete="off"
                        name="password"
                        className="form-control rounded-6"
                        onChange={(event) => setPassword(event.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-success w-100 rounded-4"
                        >Log-in
                        </button>
                    </div>
                </form>
                    <div>        
                        <p>Register account?</p>
                        <Link to='/register' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                            Register
                        </Link>
                    </div>
                
            </div>
        </div>
    );
}

export default Login;