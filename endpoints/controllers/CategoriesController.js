const db = require('../config/database');

const CategoriesController = {    

    getAllCategories: (req, res) => {
        const sql = 'SELECT * FROM Categories';
        db.query(sql, (err, result) => {
        if (err) throw err; 
        console.log(result);
        res.send(result);
        });
    },

    getCategorybyId: (req, res) => {
        const sql = `SELECT * FROM Categories WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
        if (err) throw err; 
        console.log(result);
        res.send(result);
        });
    },
 
    addCategory: (req, res) => {
        const { title, body } = req.body;
        const sql = `INSERT INTO Category (title, body) VALUES ('${title}', ${body})`;
        db.query(sql, (err, result) => {    
        if (err) throw err;
        console.log(result);
        res,send('Categories added');
        }); 
    },

    updateCategory: (req, res) => {
        const { title, body } = req.body;
        const sql = `UPDATE Category SET title = '${title}', body = ${body} WHERE id = ${req.params.id}`;
        db.query(sql, (err, result) => {
        if (err) throw err; 
        console.log(result);
        res.send('Categories updated');
        });
    },
};

module.exports = CategoriesController;

