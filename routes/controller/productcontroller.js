import product from "../../modal/productschema.js"




export const getproducts =  async (req, res)=>{
try {
   const products = await product.find({})
   res.status(200).json(products);
} catch (error) {
  res.status(500).json({message: error.message})  
}
}

export const getproductbyid = async(req, res)=>{
try {
  const ids = req.params.id
   const productdtail = await product.findOne({id:ids })
  res.status(200).json(productdtail)
} catch (error) {
  res.status(500).json({message : error.message})
}
}