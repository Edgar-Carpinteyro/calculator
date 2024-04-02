const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

// app.get("/css/index.css", function(req, res){
//     res.sendFile(__dirname + "/public/css/index.css");
// })


app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
})


app.post("/add", function(req, res) {
    var add1 = Number(req.body.add1);
    var add2 = Number(req.body.add2);

    var add = add1 + add2;

    res.sendFile(__dirname + "/add.html")
    res.send(`<body style="background: yellowgreen; ">

    <h1 style="display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;">
    The result of ${add1} + ${add2} is ${add}.
    </h1>

    </body>`);
})

app.post("/sub", function(req, res) {
    var sub1 = Number(req.body.sub1);
    var sub2 = Number(req.body.sub2);

    var sub = sub1 - sub2;
 
    res.send(`<body style="background: yellowgreen; ">

    <h1 style="display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;">
    The result of ${sub1} - ${sub2} is ${sub}.
    </h1>

    </body>`);
})

app.post("/mul", function(req, res) {
    var mul1 = Number(req.body.mul1);
    var mul2 = Number(req.body.mul2);

    var mul = mul1 * mul2;
 
    res.send(`<body style="background: yellowgreen; ">

    <h1 style="display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;">
    The result of ${mul1} x ${mul2} is ${mul}.
    </h1>

    </body>`);
})

app.post("/div", function(req, res) {
    var div1 = Number(req.body.div1);
    var div2 = Number(req.body.div2);

    var div = div1 / div2;
 
    res.send(`<body style="background: yellowgreen; ">

    <h1 style="display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;">
    The result of ${div1} ÷ ${div2} is ${div}.
    </h1>

    </body>`);
})

app.listen(4000, function(){
    console.log("Server has started on port 4000");
})