import { useCartStore } from '../store/cartStore';

const Cart = () => {
    const cart = useCartStore((state) => state.cart);
    const addToCart = useCartStore((state) => state.addToCart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

            {cart.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between border-b py-4"
                        >
                            <div className="flex items-center gap-4">
                                <img src={item.image} alt={item.title} className="w-16 h-16 object-contain" />
                                <div>
                                    <h2 className="font-medium">{item.title}</h2>
                                    <p className="text-green-600">${item.price}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <button
                                    className="bg-gray-300 px-2 rounded hover:bg-gray-400"
                                    onClick={() => decreaseQuantity(item.id)}
                                >
                                    −
                                </button>
                                <span>{item.quantity}</span>
                                <button
                                    className="bg-gray-300 px-2 rounded hover:bg-gray-400"
                                    onClick={() => addToCart(item)}
                                >
                                    +
                                </button>

                                <button
                                    className="ml-4 bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="mt-6 text-right">
                        <h2 className="text-xl font-bold">Total: ${total.toFixed(2)}</h2>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;