import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Create = () => {

    const [productImage, setProductImage] = useState('')
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let userObj = {
            productImage: productImage,
            productName: productName,
            productPrice: productPrice
        }
        try {

            let res = await axios.post('http://localhost:5000/products', userObj);
            console.log(res);
            navigate('/home');
        }
        catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='d-flex bg-secondary vh-100 justify-content-center align-items-center'>
                <div className='w-25 border bg-white rounded p-3'>
                    <form>
                        <div>
                            <h1 className='text-center'>Enter Product Details</h1>
                        </div>
                        <div className='mt-2'>
                            <label>Product Image:</label>
                            <input type='text' name="productImage" className='form-control' value={productImage} onChange={(e) => setProductImage(e.target.value)} />
                        </div>
                        <div className='mt-2'>
                            <label>Product Name:</label>
                            <input type='text' name="productName" className='form-control' value={productName} onChange={(e) => setProductName(e.target.value)} />
                        </div>
                        <div className='mt-2'>
                            <label>Price:</label>
                            <input type='number' name="price" className='form-control' value={productPrice} onChange={(e) => setProductPrice(e.target.value)} />
                        </div>
                        <button type='submit' className='btn btn-success w-100 rounded mt-2' onClick={handleSubmit}>Create</button>
                    </form>
                    <div className='mt-3'>
                        <p> Go to cart </p>
                        <Link to='/home' className='btn btn-success w-100 ms-2'>Home</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Create
