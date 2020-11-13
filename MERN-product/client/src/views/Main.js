import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';

export default () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => setProduct(res.data))
            .catch(err => console.log("Error: ", err))
    }, [])

    return (
        <>
            <ProductForm />
            <h1>All Products:</h1>
            <ProductList product ={product}/>
        </>
    )
}