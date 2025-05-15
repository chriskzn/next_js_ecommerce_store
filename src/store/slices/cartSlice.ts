import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState, CartItem, Product } from '@/types';

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);            if (!existingItem) {
                const cartItem: CartItem = {
                    ...newItem,
                    quantity: 1
                };
                state.items.push(cartItem);
            } else {
                existingItem.quantity++;
            }

            state.totalQuantity++;
            state.totalAmount += newItem.price;
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);

            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.totalAmount -= existingItem.price * existingItem.quantity;
                state.items = state.items.filter(item => item.id !== id);
            }
        },
        updateQuantity: (state, action: PayloadAction<{ id: number; change: number }>) => {
            const { id, change } = action.payload;
            const item = state.items.find(item => item.id === id);

            if (item) {
                if (item.quantity === 1 && change === -1) {
                    state.items = state.items.filter(item => item.id !== id);
                } else {
                    item.quantity += change;
                }
                state.totalQuantity += change;
                state.totalAmount += change * item.price;
            }
        },
        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
            state.totalAmount = 0;
        }
    }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
