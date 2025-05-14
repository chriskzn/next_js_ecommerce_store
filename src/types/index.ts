// Product Types
export interface Product {
    id: number;
    title: string;
    price: number;
    img: string;
    amount: number;
}

// Cart Types
export interface CartItem extends Product {
    quantity: number;
}

export interface CartState {
    items: CartItem[];
    totalQuantity: number;
    totalAmount: number;
}

// User Types
export interface User {
    id: string;
    username: string;
    email: string;
}

export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
}
