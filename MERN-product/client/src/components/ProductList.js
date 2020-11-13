import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, navigate } from '@reach/router';

export default props => {
    const [products, setProducts] = useState(null);
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
          .then(response => setProducts(response.data))
          .catch(() => setHasError(true));
      }, []);

      function handleDelete(id) {
        axios.delete('http://localhost:8000/api/products/' + id)
        .then(() => navigate("/products")
        )
    }
      if(hasError) return 'Something went wrong!';
      if(products === null) return 'Loading...';

    return (
        <div>
            {props.product.map((product, index) => {
                return <p key={index}><Link to={'/products/'+product._id}>{product.title} {' '}</Link> 
                <button onClick={(e)=>{handleDelete(product._id)}}>
                        Delete
                </button></p>
            })}
        </div>
    )
}