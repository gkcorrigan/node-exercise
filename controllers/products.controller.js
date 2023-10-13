import query from "../config/bb_database.js"

const getOne = async (id) => {
return query(`SELECT * FROM products WHERE ProductID = ?`, [id]);
}

async function getAll() {
    return query(`SELECT * FROM products`);
}

export default {
    getOne,
    getAll
}