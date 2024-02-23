import React, { useState, useContext } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { userLoginContextObj } from './Context/userLoginContext';


const Login = () => {

    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let { handleUserLogin } = useContext(userLoginContextObj);
    let { userLoginStatus } = useContext(userLoginContextObj);
    let { sellerLoginStatus } = useContext(userLoginContextObj);


    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        let loginObj = {}

        if (role === 'user') {
            loginObj = {
                email: email,
                password: password,
                role: role
            }
        }
        else {
            loginObj = {
                email: email,
                password: password,
                role: role
            }
        }
        handleUserLogin(loginObj);


    }





    return (
        <>
            <div className='d-flex bg-secondary vh-100 justify-content-center align-items-center'>
                <div className='w-25 border bg-white rounded p-3'>
                    <form>
                        <div>
                            <h1 className='text-center'>Login</h1>
                        </div>
                        <div className='d-flex ms-3'>
                            <input type="radio" name='role' className='form-check-input' value={'user'} onChange={(e) => setRole(e.target.value)} />
                            <label>User</label>

                            <input type="radio" name='role' className='form-check-input ms-2' value={'seller'} onChange={(e) => setRole(e.target.value)} />
                            <label>Seller</label>


                        </div>
                        <div className='mt-2'>
                            <label>Email:</label>
                            <input type='email' name="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='mt-2'>
                            <label>Password:</label>
                            <input type='password' name="password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type='submit' className='btn btn-success w-100 rounded mt-2' onClick={handleSubmit}>Login</button>
                    </form>
                    <div className='mt-3'>
                        <p> Not Yet Registered</p>
                        <Link to='/' className='btn btn-success w-100 ms-2'>Register</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
