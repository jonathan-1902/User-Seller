import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cards = (props) => {

    const navigate = useNavigate();

    const handleDelete = (id) => {
        // e.preventDefault();
        axios.delete('http://localhost:5000/deleteProduct/' + id)
            .then(res => {
                console.log(res)
                window.location.reload();
            })
            .catch(error => console.log(error))
    }

    return (
        <>
            <div className="col-md-3  mb-2 ">
                <div class="card" style={{ cursor: "pointer" }}>
                    <div class='image-section1 '>
                        <img src={props.Image} width={260} height={200} alt="" />
                    </div>
                    <div class="card-body ">

                        <h5>Product Name:{props.title}</h5>
                        <h5>Product Price:{props.price}</h5>
                        <div className="d-flex">
                            <h5><Link to={`/edit/${props.id}`}><button className='btn btn-success'>Edit</button></Link></h5>
                            <h5><button className='btn btn-danger ms-2' onClick={() => handleDelete(props.id)}>Delete</button></h5>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Cards
