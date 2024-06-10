/* eslint-disable no-unused-vars */
import axios, { Axios } from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../Projects/ProductCard.css";


export default function ProductDisplay() {
    const [productData, setProductData] = useState([]);
    const navigate = useNavigate()

    const myFetchRecord = async()=>{
        const response = await axios.get("https://fakestoreapi.com/products");
        console.log(response.data);
        setProductData(response.data);
    }

    useEffect(() => {
        myFetchRecord();
       
    }, [])
    

    if (productData.length <= 0) {
        return  <div className="container"><span></span><span></span><span></span><span></span></div>
    }
  return (

    <div className='body'>
       <div className="flexCards">
            {productData.map((product,index)=>{
                return <div className="card" key={index}>
                            <div className="card-border-top"></div>
                            <div>
                                <img className='img' src={product.image} alt={product.title} width={50} height={50} />
                                <span>{product.title}</span>
                                <p className="price">Rs. {product.price}</p>
                                <button className='details' onClick={()=> navigate(`product/${product.id}`)}>View Details</button>
                                <button id='button2'>{product.rating.rate} &#9733;</button>
                            </div>
                        </div>
                    })}
        </div>
    </div>
  )}



