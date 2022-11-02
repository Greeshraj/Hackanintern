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
app.get('/user', (req, res) => {
    pool.getConnection((err, conn) => {
        if(err) throw err
        console.log(`connected as id--- ${conn.threadId}`)

        // query(sqlString, callback)
        conn.query('SELECT * FROM users', (err, rows) => {
            conn.release() //return the connection to pool

            if(!err) {
                res.send(rows)
            }else {
                console.log(err);
            }
        })
    })  
})

app.get('/buy', (req, res) => {
    pool.getConnection((err, conn) => {
        if(err) throw err
        console.log(`connected as id--- ${conn.threadId}`)

        // query(sqlString, callback)
        conn.query('SELECT * FROM buy_sell WHERE buy_sell = "BUY"', (err, rows) => {
            conn.release() //return the connection to pool

            if(!err) {
                res.send(rows)
            }else {
                console.log(err);
            }
        })
    })  
})

app.get('/sell', (req, res) => {
    pool.getConnection((err, conn) => {
        if(err) throw err
        console.log(`connected as id--- ${conn.threadId}`)

        // query(sqlString, callback)
        conn.query('SELECT * FROM buy_sell WHERE buy_sell = "sell"', (err, rows) => {
            conn.release() //return the connection to pool

            if(!err) {
                res.send(rows)
            }else {
                console.log(err);
            }
        })
    })  
})






// app.delete('/:id', (req, res) => {
//     pool.getConnection((err, conn) => {
//         if(err) throw err
//         console.log(`connected as id ${conn.threadId}`)

//         // query(sqlString, callback)
//         conn.query('DELETE FROM order_book where id = ?', [req.params.id] ,(err, rows) => {
//             conn.release() //return the connection to pool

//             if(!err) {
//                 res.send(`data with id ${[req.params.id]} has been removed`)
//             }else {
//                 console.log(err);
//             }
//         })
//     })  
// })


app.post('/post', (req, res) => {
    pool.getConnection((err, conn) => {
        if(err) throw err
        console.log(`connected as id ${conn.threadId}`)

        const params = req.body
        console.log(params)

        const {amount, price, user } = req.body

        // query(sqlString, callback)

        if (params.buy_sell  == "buy"){
            conn.query('UPDATE order_book, users SET order_book.bid = order_book.bid + ?, users.stocks = users.stocks + ?, users.fiat = users.fiat + ? * ?  WHERE order_book.price = ? and users.username = ?', [params.amount, amount, price, amount, params.price, user] ,(err, rows) => {
                conn.release() //return the connection to pool
    
                if(!err) {
                    res.send(`data with price ${params.id} has been added`)
                }else {
                    console.log(err);
                }
            })
        }else {
            conn.query('UPDATE order_book, users SET order_book.ask = order_book.ask + ?, users.stocks = users.stocks - ?, users.fiat = users.fiat - ? * ?  WHERE order_book.price = ? and users.username = ?', [params.amount, amount, price, amount, params.price, user] ,(err, rows) => {
                conn.release() //return the connection to pool
    
                if(!err) {
                    res.send(`data with price ${params.id} has been added`)
                }else {
                    console.log(err);
                }
            })
        }
    })  
})



// update a record




app.listen(port, () => console.log('listen on port ' + port))

