import React from 'react'
import './Product.css'
const Product = ({name, price, imageUrl, onDelete}) => {
    return (
        
        <div className="product">
            <div className="image-cont">
                <img src={imageUrl} alt="fsf" />
            </div>
            <h2>{name}</h2>
            <h3>Price: ${price}</h3>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}
export default Product;