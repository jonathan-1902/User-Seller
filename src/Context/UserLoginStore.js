
import React, { useState } from 'react'
import { userLoginContextObj } from './userLoginContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLoginStore = ({ children }) => {
    let [userLoginStatus, setUserLoginStatus] = useState(false);
    let [sellerLoginStatus, setSellerLoginStatus] = useState(false);


    let [currentUser, setCurrentUser] = useState({});

    const handleUserLogin = async (loginObj) => {

        let email = loginObj.email;
        let password = loginObj.password;
        let role = loginObj.role;



        try {
            if (role === 'seller') {
                try {
                    axios.post('http://localhost:5000/login', { email, password })
                        .then(result => {
                            console.log(result)
                            if (result.data === 'success') {
                                setCurrentUser(loginObj);
                                setSellerLoginStatus(true);
                                navigate('/home');
                            }
                        });
                }
                catch (error) {
                    console.log(error)
                }
            }
            else {
                try {
                    axios.post('http://localhost:5000/singleEmployee', { email, password })
                        .then(result => {
                            console.log(result)
                            if (result.data === 'success') {
                                setCurrentUser(loginObj);
                                setUserLoginStatus(true);
                                navigate('/home');
                            }
                        });
                }
                catch (error) {
                    console.log(error);
                }
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <userLoginContextObj.Provider value={{ handleUserLogout, userLoginStatus, sellerLoginStatus, currentUser, handleUserLogin }}>{children}</userLoginContextObj.Provider>
    )
}

export default UserLoginStore
