import React from 'react';
import { useCartStore } from '../store/cartStore';

const Cart = () => {
    const cart = useCartStore((state) => state.cart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {cart.length === 0 ? (
                <p>No items in cart.</p>
            ) : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} className="flex items-center mb-4 border-b pb-2">
                            <img src={item.image} className="w-16 h-16 object-contain" alt="" />
                            <div className="ml-4 flex-1">
                                <h2>{item.title}</h2>
                                <p className="text-green-600">${item.price}</p>
                                <p className="text-sm">Quantity: {item.quantity}</p>
                            </div>
                            <button
                                className="bg-red-500 text-white px-2 py-1 rounded"
                                onClick={() => removeFromCart(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <h2 className="text-xl mt-4 font-semibold">Total: ${total.toFixed(2)}</h2>
                </div>
            )}
        </div>
    );
};

export default Cart;