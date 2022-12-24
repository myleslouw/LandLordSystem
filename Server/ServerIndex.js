const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'Skullysucksass69',
    database: 'billingsystem'
});

//Adding to db
//INSERT INTO billingsystem.billinglist (idBillingList, Name, Address, Bill, PayedLastMonth)
//VALUES (NULL, "Jaquan" , "8 Jequal Road, Cape Town", 2901.4 , false);


//server side get
app.get('/fetchusers', (req, res) => {   //server side get request for showing all the employees
    db.query('SELECT * FROM billingsystem.billingList',
      (err, result) => {
        if (err) {            //if there was an error it will log it 
          console.log(err);
        } else {              //if successful
          res.send(result)
        }
      })
  })

app.listen(3001, () => {
    console.log("X_SERVER RUNNING BRO_X")
})