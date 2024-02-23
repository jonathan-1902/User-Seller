import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Edit = () => {

    const { id } = useParams();
    console.log(id);

    // const [data, setData] = useState([]);
    const [productImage, setProductImage] = useState('');
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');


    // const getProducts = async () => {

    //     try {
    //         let res = await axios.get('http://localhost:5000/all-products');
    //         console.log(res.data);
    //         setData(res.data);
    //     }
    //     catch (error) {
    //         console.log(error);
    //     }
    // }

    useEffect(() => {
        axios.get('http://localhost:5000/single-product/' + id)
            .then(result => {
                console.log(result)
                setProductImage(result.data.productImage)
                setProductName(result.data.productName)
                setProductPrice(result.data.productPrice)
            })
            .catch(error => console.log(error));
    }, [])

    // const existingUser = data.filter((ele) => ele._id === id);
    // console.log(existingUser[0]);

    // const obj = existingUser[0];
    // console.log(obj.productImage);
    // console.log(obj.productName);
    // console.log(obj.productPrice);
    // console.log(existingUser[0].productImage)


    // console.log(existingUser[0].productPrice)






    const handleSubmit = (e) => {
        e.preventDefault();

        axios.put('http://localhost:5000/updateUser/' + id, { productImage, productName, productPrice })
            .then(result => {
                console.log(result)
            })

    }
    return (
        <>
            <div className='d-flex bg-secondary vh-100 justify-content-center align-items-center'>
                <div className='w-25 border bg-white rounded p-3'>
                    <form>
                        <div>
                            <h1 className='text-center'>Update Product Details</h1>
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
                        <button type='submit' className='btn btn-success w-100 rounded mt-2' onClick={handleSubmit}>Update</button>
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

export default Edit
