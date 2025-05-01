import React from 'react';
import { useCartStore } from '../store/cartStore';

const ProductCard = ({ product }) => {
    const addToCart = useCartStore((state) => state.addToCart);

    return (
        <div className="border p-4 rounded shadow hover:shadow-lg transition">
            <img src={product.image} alt={product.title} className="h-48 mx-auto" />
            <h2 className="mt-2 font-semibold">{product.title}</h2>
            <p className="text-green-600 font-bold">${product.price}</p>
            <button
                className="mt-2 bg-blue-500 text-white px-4 py-1 rounded"
                onClick={() => addToCart(product)}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;