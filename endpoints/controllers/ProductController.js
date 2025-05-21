const db = require('../config/database');

const ProductController = {    

    getAllProducts: (req, res) => {
        const sql = 'SELECT * FROM Products';
        db.query(sql, (err, result) => {
        if (err) throw err; 
        console.log(result);
        res.send(result);
        });
    },

    getProductsDesc: (req, res) => {
        const sql = 'SELECT * FROM Products ORDER BY price DESC';
        db.query(sql, (err, result) => {
        if (err) throw err; 
        console.log(result);
        res.send(result);
        });
    },

    getProductbyId: (req, res) => {
        const sql = `SELECT * FROM Products WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
        if (err) throw err; 
        console.log(result);
        res.send(result);
        });
    },
 
    getProductByName: (req, res) => {
        const name = req.params.name;
        const sql = `SELECT * FROM Products WHERE name LIKE '%${name}%'`;
        db.query(sql, (err, result) => {
        if (err) throw err; 
        console.log(result);
        res.send(result);
        });
    },

    addProduct: (req, res) => {
        const { name, price } = req.body;
        const sql = `INSERT INTO Products (name, price) VALUES ('${name}', ${price})`;
        db.query(sql, (err, result) => {    
        if (err) throw err;
        console.log(result);
        res,send('Product added');
        }); 
    },

    updateProduct: (req, res) => {
        const { name, price } = req.body;
        const sql = `UPDATE Products SET name = '${name}', price = ${price} WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
        if (err) throw err; 
        console.log(result);
        res.send('Product updated');
        });
    },
    
    deleteProduct: (req, res) => {
        const sql = `DELETE FROM Products WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
        if (err) throw err; 
        console.log(result);
        res.send('Product deleted');
        });
    },
}