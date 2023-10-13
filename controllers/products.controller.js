import query from "../config/bb_database.js"

const getOne = async (id) => {
return query(`SELECT * FROM products WHERE ProductID = ?`, [id]);
}

async function getAll() {
    return query(`SELECT * FROM products`);
}

async function addProduct(newProductInfo) {
    return query (`INSERT INTO products SET ?`, [newProductInfo]);
}


async function updateProduct(id, updatedProductInfo){
    return query("UPDATE products SET ? WHERE ProductID = ?", [updatedProductInfo, id]);
}

async function deleteProduct(id) {
    return query("DELETE FROM products WHERE ProductID = ?", [id]);
}


export default {
    getOne,
    getAll,
    addProduct,
    updateProduct,
    deleteProduct
}