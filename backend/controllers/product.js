import productModel from "../modules/product.js"

const getProduct = async (req, res) => {
    const products = await productModel.find()
    res.json(products)    
}

const postProduct = async (req, res) => {
    const {image}= req.body
    const product ={image}
    await productModel.create(product)
    res.json(product)
    
}

export {getProduct, postProduct}