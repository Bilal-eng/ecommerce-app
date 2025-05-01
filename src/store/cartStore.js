import { create } from 'zustand';

const getCartFromStorage = () => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
};

export const useCartStore = create((set) => ({
    cart: getCartFromStorage(),
    addToCart: (product) =>
        set((state) => {
            const updated = [...state.cart, product];
            localStorage.setItem('cart', JSON.stringify(updated));
            return { cart: updated };
        }),
    removeFromCart: (id) =>
        set((state) => {
            const updated = state.cart.filter((item) => item.id !== id);
            localStorage.setItem('cart', JSON.stringify(updated));
            return { cart: updated };
        }),
}));
