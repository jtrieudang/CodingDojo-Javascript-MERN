import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Link } from '@reach/router';

export default props => {
    const [product, setProduct] = useState({})
    useEffect(()=> {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [props.id])

    return(
        <div>
            <p>Title: {product.title} </p>
            <p>Price: {product.price} </p>
            <p>Description: {product.description} </p>
            {/* needs to match with app.js */}
            <Link to={"/products/" + product._id + "/edit"}>Edit</Link>
        </div>
        
    )
};

