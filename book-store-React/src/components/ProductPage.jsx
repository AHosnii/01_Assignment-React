// import React from 'react'
// import Product from './Product';
// import './ProductPage.css'

// const ProductPage = () => {

//     const initialProducts = [
//         { id: 1, name: 'Book 1', price: 20 , imageUrl: 'https://wpthemes.themehunk.com/book-store/wp-content/uploads/sites/230/2021/12/144-320x510.png'},
//         { id: 2, name: 'Book 2', price: 50 , imageUrl: 'https://wpthemes.themehunk.com/book-store/wp-content/uploads/sites/230/2022/04/23.png'},
//         { id: 3, name: 'Book 3', price: 40 , imageUrl: 'https://wpthemes.themehunk.com/book-store/wp-content/uploads/sites/230/2021/12/111-320x510.png'},
//         { id: 4, name: 'Book 4', price: 55 , imageUrl: 'https://wpthemes.themehunk.com/book-store/wp-content/uploads/sites/230/2022/04/6-320x510.png'},
//         { id: 5, name: 'Book 5', price: 60 , imageUrl: 'https://wpthemes.themehunk.com/book-store/wp-content/uploads/sites/230/2022/04/5-320x510.png'},
//         { id: 6, name: 'Book 6', price: 40 , imageUrl: 'https://wpthemes.themehunk.com/book-store/wp-content/uploads/sites/230/2022/04/20.png'},

//     ];

//     const [products, setProducts] = useState(initialProducts);

//     const handleDelete = (id) => {
//         const updatedProducts = products.filter((product) => product.id !== id);
//         setProducts(updatedProducts);
//     };

//     return (
//         <div className="product-page">
//             <div className="main">
//                 <h4>All in One Book Store</h4>

//             </div>

//             <div className="product-section">
//                 {products.map((product) => (
//                     <Product key={product.id} name={product.name} price={product.price} imageUrl={product.imageUrl} onDelete={() => handleDelete(product.id)} />
//                 ))}
//             </div>
            
//         </div>
//     )
// }


// export default ProductPage;


import React, { useState } from 'react';
import Product from './Product';
import './ProductPage.css'

const ProductPage = () => {
const initialProducts = [
    { id: 1, name: 'Book 1', price: 350, imageUrl: 'https://wpthemes.themehunk.com/book-store/wp-content/uploads/sites/230/2021/12/144-320x510.png' },
    { id: 2, name: 'Book 2', price: 220, imageUrl: 'https://wpthemes.themehunk.com/book-store/wp-content/uploads/sites/230/2022/04/23.png' },
    { id: 3, name: 'Book 3', price: 500, imageUrl: 'https://wpthemes.themehunk.com/book-store/wp-content/uploads/sites/230/2021/12/111-320x510.png' },
    { id: 4, name: 'Book 4', price: 300, imageUrl: 'https://wpthemes.themehunk.com/book-store/wp-content/uploads/sites/230/2022/04/5-320x510.png' },
    { id: 5, name: 'Book 5', price: 100, imageUrl: 'https://wpthemes.themehunk.com/book-store/wp-content/uploads/sites/230/2022/04/20.png' },
    { id: 6, name: 'Book 6', price: 100, imageUrl: 'https://wpthemes.themehunk.com/book-store/wp-content/uploads/sites/230/2022/04/21-320x510.png' },
    { id: 7, name: 'Book 7', price: 100, imageUrl: 'https://wpthemes.themehunk.com/book-store/wp-content/uploads/sites/230/2021/12/222-320x510.png' },
    { id: 8, name: 'Book 8', price: 100, imageUrl: 'https://wpthemes.themehunk.com/book-store/wp-content/uploads/sites/230/2021/12/44-320x510.png' },
    { id: 9, name: 'Book 9', price: 100, imageUrl: 'https://wpthemes.themehunk.com/book-store/wp-content/uploads/sites/230/2022/04/15-320x510.png' },
    { id: 10, name: 'Book 10', price: 100, imageUrl: 'https://wpthemes.themehunk.com/book-store/wp-content/uploads/sites/230/2022/04/6-320x510.png' },
];

const [products, setProducts] = useState(initialProducts);
const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
};

return (
    <div className="product-page">
        <div className="main">
            <h4>All in One Book Store</h4>
        </div>
    
        <div className="product-section">
            {products.map((product) => (
                <Product key={product.id} name={product.name} price={product.price} imageUrl={product.imageUrl} onDelete={() => handleDelete(product.id)} />
            ))}
        </div>
    
    </div>
);
};

export default ProductPage;