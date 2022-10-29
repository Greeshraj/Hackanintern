const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mysql = require('mysql')

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(cors())


const pool = mysql.createPool({
    connectionLimit: 10,
    host:'localhost',
    user: 'sumit_sharma',
    password: 'admin123',
    database: 'stock_market',
    port: 3307
})

// get
app.get('/', (req, res) => {
    pool.getConnection((err, conn) => {
        if(err) throw err
        console.log(`connected as id--- ${conn.threadId}`)

        // query(sqlString, callback)
        conn.query('SELECT * FROM order_book', (err, rows) => {
            conn.release() //return the connection to pool

            if(!err) {
                res.send(rows)
            }else {
                console.log(err);
            }
        })
    })  
})



app.get('/:id', (req, res) => {
    pool.getConnection((err, conn) => {
        if(err) throw err
        console.log(`connected as id ${conn.threadId}`)

        // query(sqlString, callback)
        conn.query('SELECT * FROM order_book where id = ?', [req.params.id] ,(err, rows) => {
            conn.release() //return the connection to pool

            if(!err) {
                res.send(rows)
            }else {
                console.log(err);
            }
        })
    })  
})


app.delete('/:id', (req, res) => {
    pool.getConnection((err, conn) => {
        if(err) throw err
        console.log(`connected as id ${conn.threadId}`)

        // query(sqlString, callback)
        conn.query('DELETE FROM order_book where id = ?', [req.params.id] ,(err, rows) => {
            conn.release() //return the connection to pool

            if(!err) {
                res.send(`data with id ${[req.params.id]} has been removed`)
            }else {
                console.log(err);
            }
        })
    })  
})


app.post('/post', (req, res) => {
    pool.getConnection((err, conn) => {
        if(err) throw err
        console.log(`connected as id ${conn.threadId}`)

        const params = req.body
        console.log(params)

        // query(sqlString, callback)
        conn.query('INSERT INTO buy_sell SET ?', params ,(err, rows) => {
            conn.release() //return the connection to pool

            if(!err) {
                res.send(`data with price ${params.id} has been added`)
            }else {
                console.log(err);
            }
        })
    })  
})

app.patch('/:id', (req, res) => {
    pool.getConnection((err, conn) => {
        if(err) throw err
        console.log(`connected as id ${conn.threadId}`)

        const params = req.body
        const {id, bid, price, ask} = req.body

        // query(sqlString, callback)
        conn.query('UPDATE order_book SET bid = ? WHERE id = ?', [bid,req.params.id] ,(err, rows) => {
            conn.release() //return the connection to pool

            if(!err) {
                res.send(`data with id ${req.params.id} has been updated`)
            }else {
                console.log(err);
            }
        })
    })  
})


// update a record




app.listen(port, () => console.log('listen on port ' + port))

