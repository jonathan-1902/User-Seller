import React, { useState, useEffect } from 'react'
import Cards from './Cards'
import { Link } from 'react-router-dom'
import axios from 'axios';
import Header from './Header';

const Home = () => {

    const [data, setData] = useState([]);

    const getProducts = async () => {

        try {
            let res = await axios.get('http://localhost:5000/all-products');
            console.log(res.data);
            setData(res.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProducts();
    }, [])

    return (
        <>

            <div className=' bg-secondary vh-100 justify-content-center align-items-center'>
                <div>
                    <Header />
                </div>
                <div>
                    <h2 className='text-center'><Link to='/create'><span className="badge bg-success">Add Products</span></Link></h2>
                </div>
                <div className=' d-flex container vh-auto '>
                    <div className='row mt-3'>
                        {/* <Cards Image={'https://cdn.pixabay.com/photo/2018/09/26/01/06/piano-3703616_1280.jpg'} title={'Keyboard'} />
                        <Cards Image={'https://cdn.pixabay.com/photo/2017/04/09/18/46/flute-2216485_1280.jpg'} title={'Flute'} />
                        <Cards Image={'https://cdn.pixabay.com/photo/2015/09/05/12/53/violin-924349_1280.jpg'} title={'Violin'} />
                        <Cards Image={'https://cdn.pixabay.com/photo/2017/11/07/00/22/guitar-2925282_1280.jpg'} title={'Guitar'} /> */}
                        {/* <Cards Image={'https://cdn.pixabay.com/photo/2016/11/19/13/57/drum-set-1839383_1280.jpg'} title={'Drum Kit'} />
                        <Cards Image={'https://cdn.pixabay.com/photo/2018/01/22/20/32/brass-3099922_1280.jpg'} title={'Brass'} />
                        <Cards Image={'https://cdn.pixabay.com/photo/2020/12/23/09/56/electronic-drum-pad-5854409_1280.jpg'} title={'Pads'} />
                        <Cards Image={'https://cdn.pixabay.com/photo/2013/09/07/02/36/piano-179726_1280.jpg'} title={' Piano'} /> */}
                        {
                            data.map((ele) => {
                                return (
                                    <Cards id={ele._id} Image={ele.productImage} title={ele.productName} price={ele.productPrice} />
                                )
                            })
                        }

                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
