import { create } from 'zustand';

const getInitialCart = () => {
    if (typeof window !== 'undefined') {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    }
    return [];
};

export const useCartStore = create((set) => ({
    cart: getInitialCart(),

    addToCart: (product) =>
        set((state) => {
            const existing = state.cart.find((item) => item.id === product.id);
            let updatedCart;
            if (existing) {
                updatedCart = state.cart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                updatedCart = [...state.cart, { ...product, quantity: 1 }];
            }
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return { cart: updatedCart };
        }),

    removeFromCart: (id) =>
        set((state) => {
            const updatedCart = state.cart.filter((item) => item.id !== id);
            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return { cart: updatedCart };
        }),

    decreaseQuantity: (id) =>
        set((state) => {
            const updatedCart = state.cart
                .map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0); // remove item if quantity reaches 0

            localStorage.setItem('cart', JSON.stringify(updatedCart));
            return { cart: updatedCart };
        }),
}));