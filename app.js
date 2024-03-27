var express = require('express');
var app = express();

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.post("/test", async (req, res) => {
    //here i add try catch for exception handling 
    try {
        const arr = req.body;
        //here i iterate through array and created a new array as ans which contain comma separated name
        const ans = arr.map((obj) => obj.name);
        return res.json(ans);
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
});

//input
// [{
//     "name" : "bhavin"
//   },
//   {
//     "name" : "mehul"
//   },
//   {
//     "name" : "raj"
//   }
//   ]

//output
// [
//     "bhavin",
//     "mehul",
//     "raj"
//   ]

app.listen(5000, () => {
    console.log("server created")
});





