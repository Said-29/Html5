import Model from "../models";
const { Product } = Model;
// Create and Save a new Product
export const createProduct = (req, res) => {
 // Validate request
 if (!req.body) {
    res.status(400).json({
    status: "error",
    message: "Content can not be empty.",
    payload: null,
    });
    return;
    }
    // Create a Product
    const product = {
    name: req.body.name,
    prod_type: req.body.prod_type,
    price: req.body.price,
    instock: req.body.instock,
    image: req.body.image,
    };
    // Save Product in the database
    Product.create(product)
    .then((data) => {
    res.status(200).json({
    status: "success",
    message: "Product successfully created",
    payload: data,
    });
    })
    .catch((err) => {
    res.status(500).json({
    status: "error",
    message: "Something happened creating a product. " + err.message,
    payload: null,
    });
    });
};
// Retrieve all Products from the database.
export const getAllProducts = (req, res) => {
    Product.findAll()
 .then((data) => {
 return res.status(200).json({
 status: "success",
 message: "Products successfully retrieved",
 payload: data,
 });
 })
 .catch((err) => {
 return res.status(500).json({
 status: "error",
 message: "Something happened retrieving all products. " + err.message,
 payload: null,
 });
 })
};
// Find a single Product with an id
export const getProductById = (req, res) => {
    Product.findByPk(req.params.id)
    .then((data) => {
    return res.status(200).json({
    status: "success",
    message: "Products successfully retrieved",
    payload: data,
    });
    })
    .catch((err) => {
    return res.status(500).json({
    status: "error",
    message: "Something happened retrieving all products. " + err.message,
    payload: null,
    });
    })
};
// Update a Product by the id in the request
export const updateProduct = (req, res) => {
    // Validate request
 if (!req.body) {
    return res.status(400).json({
    status: "error",
    message: "Content can not be empty.",
    payload: null,
    });
    }
    // Save Product in the database
    Product.update(req.body, {
    where: { id: req.params.id}
    })
    .then((isUpdated) => {
    if (isUpdated){
    res.status(200).json({
    status: "success",
    message: "Product successfully updated",
    payload: req.body,
    });
    }else {
    res.status(500).json({
    status: "error",
    message:
    "Something happened updating the product. " +
    req.body.id +
    " See:" +
    err.message,
    payload: null,
    });
    }
    })
    .catch((err) => {
    res.status(500).json({
    status: "error",
    message: "Something happened updating a product. " + err.message,
    payload: null,
    });
    });
};
// Delete a Product with the specified id in the request
export const deleteProduct = (req, res) => {
    // Validate request
 if (!req.body.id) {
    res.status(400).json({
    status: "error",
    message: "Content can not be empty.",
    payload: null,
    });
    return;
    }
    // Delete Product in the database
    Product.destroy({
    where: {
    id: req.body.id,
    },
    })
    .then((isDeleted) => {
    if (isDeleted) {
    res.status(200).json({
    status: "success",
    message: "Product successfully deleted",
    payload: null,
    });
    } else {
    res.status(500).json({
    status: "error",
    message:
    "Something happened deleting the product. " +
    req.body.id +
    " See:" +
    err.message,
    payload: null,
    });
    }
    })
    .catch((err) => {
    res.status(500).json({
    status: "error",
    message: "Something happened deleting a product. " + err.message,
    payload: null,
    });
    });
};