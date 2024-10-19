import { create } from 'zustand';

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({products}),
    createProduct: async (product) => {
        if(!product.name || !product.price || !product.image){
            return {success: false, message: "All fields are required"}
        }

        const response = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })

        const data = await response.json();
        if(!data.success) return {success: false, message: data.message}
        set((state) => ({products: [...state.products, data]}))
        return {success: true, message: "Product created successfully"}
    },
    getProducts: async () => {
        const response = await fetch("/api/products")
        const data = await response.json();
        set({products: data.products})
    },
    deleteProduct: async (id) => {
        const response = await fetch(`/api/products/${id}`, {
            method: "DELETE"    
        })
        const data = await response.json();
        if(!data.success) return {success: false, message: data.message}
        set((state) => 
            ({products: state.products.filter((product) => product._id !== id)})) 
        return {success: true, message: "Product deleted successfully"}
    },
    updateProduct: async (id, product) => {
        const response = await fetch(`/api/products/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
        const data = await response.json();
        if(!data.success) return {success: false, message: data.message}
        set((state) => 
        ({products: state.products.map((product) => product._id === id ? data.product : product)}))
        return {success: true, message: "Product updated successfully"}
    }
}))