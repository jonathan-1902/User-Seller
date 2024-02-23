import React, { useState } from 'react'
import '../src/styles/Register.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [city, setCity] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [role, setRole] = useState('user');

    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (role === 'user') {
            let userObj = {
                name: name,
                email: email,
                password: password,
                phone: phone,
                city: city
            }
            try {

                let res = await axios.post('http://localhost:5000/employees/add-emp', userObj);
                console.log(res);
                navigate('/login');

            }
            catch (error) {
                console.log(error);
            }
        }
        else {
            let userObj = {
                name: name,
                email: email,
                password: password,
                phone: phone,
                companyName: companyName
            }
            try {

                let res = await axios.post('http://localhost:5000/sellers', userObj);
                console.log(res);
                navigate('/login');

            }
            catch (error) {
                console.log(error);
            }
        }
    }

    return (
        <>
            <div className='d-flex bg-secondary vh-100 justify-content-center align-items-center'>
                <div className='w-25 border bg-white rounded p-3'>
                    <form>
                        <div>
                            <h1 className='text-center'>Register</h1>
                        </div>
                        <div className='d-flex ms-3'>
                            <input type="radio" name='role' className='form-check-input' value={'user'} onChange={(e) => setRole(e.target.value)} />
                            <label>User</label>

                            <input type="radio" name='role' className='form-check-input ms-2' value={'seller'} onChange={(e) => setRole(e.target.value)} />
                            <label>Seller</label>


                        </div>
                        {(role === 'user') ? (<>
                            <div className='mt-2'>
                                <label>User Name:</label>
                                <input type='text' name="name" className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className='mt-2'>
                                <label> Email:</label>
                                <input type='email' name="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='mt-2'>
                                <label>Password:</label>
                                <input type='password' name="password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className='mt-2'>
                                <label> Phone:</label>
                                <input type='number' name="phone" className='form-control' value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className='mt-2'>
                                <label> city:</label>
                                <input type='text' name="city" className='form-control' value={city} onChange={(e) => setCity(e.target.value)} />
                            </div>

                            <button type='submit' className='btn btn-success w-100 rounded mt-2' onClick={handleSubmit}>Register</button>
                        </>) : (<>
                            <div className='mt-2'>
                                <label>User Name:</label>
                                <input type='text' name="name" className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className='mt-2'>
                                <label> Email:</label>
                                <input type='email' name="email" className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='mt-2'>
                                <label>Password:</label>
                                <input type='password' name="password" className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className='mt-2'>
                                <label> Phone:</label>
                                <input type='number' name="phone" className='form-control' value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className='mt-2'>
                                <label> company name:</label>
                                <input type='text' name="companyName" className='form-control' value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
                            </div>

                            <button type='submit' className='btn btn-success w-100 rounded mt-2' onClick={handleSubmit}>Register</button></>)
                        }
                    </form>

                    <div className='mt-3'>
                        <p> Already Have an account</p>
                        <Link to='/login' className='btn btn-success w-100 ms-2'>Login</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Register
