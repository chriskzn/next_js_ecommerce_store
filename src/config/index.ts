// Application configuration
export const config = {
    // API endpoint
    apiUrl: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
    
    // Authentication
    authTokenKey: 'refresh_store_token',
    
    // Shopping Cart
    cartStorageKey: 'refresh_store_cart',
    
    // Pagination
    itemsPerPage: 12,
    
    // Currency
    currency: {
        code: 'USD',
        symbol: '$'
    },
    
    // Feature flags
    features: {
        wishlist: true,
        reviews: true,
        quickView: true,
    }
};
