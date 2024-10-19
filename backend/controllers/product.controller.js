import Product from "../models/product.model.js";

const getProducts = (req, res) => {
    Product.find().then((products) => {
        res.status(200).json({
            success: true,
            products,
            // data: products,
            message: "Products fetched successfully"
        })
    }).catch((err) => {
        res.status(500).json({
            success: false,
            message: `Product fetch failed: ${err.message}`
        })
    })
}

const createProduct = (req, res) => {
    const { name, price, image } = req.body;

    if (!name || !price || !image) {
        return res.status(400).json({
            message: "All fields are required"
        })
    }

    const product = new Product({
        name,
        price,
        image
    })

    product.save().then(()=>{
        res.status(201).json({
            success: true,
            message: "Product created successfully"
        })
    }).catch((err) => {
        res.status(500).json({
            success: false,
            message: `Product creation failed: ${err.message}`
        })
    })
    
}

const updateProduct = (req, res) => {
    const { id } = req.params;
    const { name, price, image } = req.body;

    Product.findById(id).then((product) => {
        if(!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }
        product.name = name;
        product.price = price;
        product.image = image;
        product.save().then(()=>{
            res.status(200).json({
                success: true,
                product,
                message: "Product updated successfully"
            })
        }).catch((err) => {
            res.status(500).json({
                success: false,
                message: `Product update failed: ${err.message}`
            })
        })
    })

    // Product.findByIdAndUpdate(id, product, { new: true }).then((updatedProduct) => {
        //     res.status(200).json({
        //         success: true,
        //         updatedProduct,
        //         message: "Product updated successfully"
        //     })
        // }).catch((err) => {
        //     res.status(500).json({
        //         success: false,
        //         message: `Product update failed: ${err.message}`
        //     })
        // })
}

const deleteProduct = (req, res) => {
    const { id } = req.params;
    console.log("Deleting product with id: ", id);

    Product.findById(id).then((product) => {
        if(!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }
    })

    Product.findByIdAndDelete(id).then(()=> {
        res.status(200).json({
            success: true,
            message: "Product deleted successfully"
        })
    }).catch((err) => {
        res.status(500).json({
            success: false,
            message: `Product deletion failed: ${err.message}`
        })
    })
}

export { getProducts, createProduct, updateProduct, deleteProduct };