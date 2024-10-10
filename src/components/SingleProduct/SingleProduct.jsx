import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = ({product}) => {
    const {id,title,description,price,thumbnail}=product;
    return (
        <div className="card bg-base-300 px-5  shadow-xl">
        <figure>
          <img src={thumbnail} alt="logo" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <h1>{price}</h1>
          
          
          </div>
          <div className="card-actions px-5">
            <Link to={`/product/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
    
    );
};

export default SingleProduct;