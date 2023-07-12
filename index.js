const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.json())

// function middleware1(req,  res, next){
//     console.log("from inside middleware " + req.headers.counter);
//     next();
// }

// app.use(middleware1);

function calculateSum(counter){
    var sum=0;
    for(var i=1;i<=counter;i++){
        sum+=i;
    }
    return sum;
}

// function calculateMul(counter){
//     var ans=1;
//     for(var i=1;i<=counter;i++){
//         ans*=i;
//     }
//     return ans;
// }

function handleFirstRequest(req, res) {
    var counter = req.query.counter;

    var calculatedSum=calculateSum(counter);
    //var calculatedMul=calculateMul(counter);


    var answerObject = {
        sum: calculatedSum,
        //mul: calculatedMul
    }
    
    res.send(answerObject);
}

// function givePage(req, res){
//     res.send(`<!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Hello from page</title>
//     </head>
//     <body>
//         <i>Hi there</i>
//     </body>
//     </html>`);
// }

// app.get('/', givePage);

app.get('/handleSum', handleFirstRequest)
//app.post('/handleSum', handleFirstRequest)

function started(){
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)

