import React, { useContext } from 'react'
import { BiDonateBlood } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { userLoginContextObj } from './Context/userLoginContext';


const Header = () => {

    // let {currentUser} = useContext(user)
    let { currentUser } = useContext(userLoginContextObj);


    const handleLogout = () => {

    }
    return (
        <>
            <div>
                <nav className='navbar'>
                    <div className='container-fluid'>
                        <div className='navbar-brand h1'><BiDonateBlood color='red' /> Music Store </div>
                        <ul className='navbar-nav flex-row '>
                            <li className='nav-item mx-3'>

                                <p className='nav-link mt-1'>
                                    <FaRegUserCircle /> Welcome  &nbsp;
                                    {/* {currentUser.role} &nbsp; */}
                                    <span className="badge bg-secondary">
                                        {currentUser.role}
                                    </span>
                                </p>
                            </li>
                            <li className='nav-item mx-3 mt-1'>
                                <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header
