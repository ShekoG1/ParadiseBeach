const express = require("express");
const bodyParser = require('body-parser');
const db = require("./api/db.js");
const BookingRouter = require("./api/endpoints/booking");
const app = express();
const PORT = 5000;

var conn = new db();
app.use(bodyParser.json());

app.get(
    "/api",
    (req,res) => {
        res.json(
            {
                "users": ["userOne","userTwo","userThree"]
            }
        )
    }
);

app.listen(
    PORT,
    ()=>{
        console.log(`PORT IS ACTIVE ON ${PORT}`);
    }
);

app.use('/api/booking',BookingRouter)