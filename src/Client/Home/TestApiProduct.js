import React, { useState, useEffect } from 'react';

function TestApiProduct() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://localhost:7014/api/SanPham/GetAllSanPham')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <div>
            <h1>Product List</h1>
            <ul>
                {products.map(product => (
                    <li key={product.productID}>{product.productName}</li>
                ))}
            </ul>
        </div>
    );
}

export default TestApiProduct;
