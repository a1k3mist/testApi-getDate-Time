const express = require('express')
const process = require('process')

var PORT = 3000;
let date_ob = new Date();

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    var uptime = process.uptime(); 
    console.log(uptime)
    res.send({uptime})
})

app.get('/getTime', (req, res) => {
let ts = Date.now();
let date_ob = new Date(ts);
let date = date_ob.getDate();
let month = date_ob.getMonth() + 1;
let year = date_ob.getFullYear();

// prints date & time in DD-MM-YYYY format
console.log(date + "-" + month + "-" + year);
})


app.get('/getDate&Time', (req, res) => {
    var uptime = process.uptime(); 
    console.log(uptime)
    let ts = Date.now();
    let date_ob = new Date(ts);
    let date = date_ob.getDate();
    let month = date_ob.getMonth() + 1;
    let year = date_ob.getFullYear();

    var datenow = date + "-" + month + "-" + year
    res.send({datenow, uptime})

})

app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});