const express = require('express');
const app = express();
const mysql = require('mysql2');
app.use(express.json());

const db = mysql.createConnection({ 
    host: 'localhost',
    user: 'root',   
    password: 'Nahiaotegui.24',
    database: 'expressqldatabase',
});

db.connect();

const port = 3000;
app.listen(port, () => {
    console.log(`Servidor en puerto ${port}`);
});

app.get('/createdb', (req, res) => {
 const sql = 'CREATE DATABASE expressqldatabase'

 db.query(sql, (err, result) => {
   if (err) throw err
   res.send('Database created...,',result)
 })
});

app.get('/createTableProducts', (req, res) => {
 const sql =
   'CREATE TABLE Products(id int AUTO_INCREMENT, name VARCHAR(255) NOT NULL, price DECIMAL(10, 2) NOT NULL, PRIMARY KEY(id))'
 db.query(sql, (err, result) => {
   if (err) throw err
   res.send('Products table created...', result)
 })
});

app.get('/createTableCategories', (req, res) => {
 const sql =
   'CREATE TABLE Categories(id int AUTO_INCREMENT,title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id))'
 db.query(sql, (err, result) => {
   if (err) throw err
   res.send('Products table created...', result)
 })
});

app.get('/createTableProductsCategories', (req, res) => {
 const sql =
   'CREATE TABLE ProductsCategories(id int AUTO_INCREMENT, product_id int, category_id int, PRIMARY KEY(id), FOREIGN KEY(product_id) REFERENCES Products(id), FOREIGN KEY(category_id) REFERENCES Categories(id))'
 db.query(sql, (err, result) => {
   if (err) throw err
   res.send('ProductsCategories table created...', result)
 })
});

app.post('/addProduct', (req, res) => {
 const post = {
   name: req.body.name,
   price: req.body.price,
 }
 const sql = 'INSERT INTO Products SET ?'

 db.query(sql, post, (err, result) => {
   if (err) throw err
   res.send('Post added...', result)
 })
});

app.post('/addCategories', (req, res) => {
 const post = {
   title: req.body.title,
   body: req.body.body,
 }
 const sql = 'INSERT INTO Categories SET ?'

 db.query(sql, post, (err, result) => {
   if (err) throw err
   res.send('Post added...', result)
 })
});

app.put('/Products/id/:id', (req, res) => {
 const newName = 'Updated Name'
 const sql = `UPDATE Products SET name = '${newName}' WHERE id = ${req.params.id}`
 db.query(sql, (err, result) => {
   if (err) throw err
   res.send('Post updated...', result)
 })
});

app.put('/Categories/id/:id', (req, res) => {
 const newTitle = 'Updated Title'
 const sql = `UPDATE Categories SET title = '${newTitle}' WHERE id = ${req.params.id}`
 db.query(sql, (err, result) => {
   if (err) throw err
   res.send('Post updated...', result)
 })
});








