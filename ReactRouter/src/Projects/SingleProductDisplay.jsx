/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function SingleProductDisplay() {
    const {id} = useParams();
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])
    const fetchData = async()=>{
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        console.log(response.data);
        setProductData([response.data]);
    }
  return (
    <div>
        <table border={2}>
            <thead>
                <tr>
                    <th>id</th>
                    <th>image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Category</th>
                    <th>Description</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {productData.map((product,index)=>{
                    return <tr key={index}>
                        <td>{id}</td>
                        <td><img src={product.image} title={product.title} width={50} height={50} /></td>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{product.category}</td>
                        <td>{product.description}</td>
                        <td>{product.rating.rate}</td>
                    </tr>
                })}
            </tbody>
        </table>
        

    </div>
  )
}
