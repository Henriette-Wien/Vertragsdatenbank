const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

//connect to mongoose

mongoose.connect("mongodb+srv://sp5pl:sp5@vertragsdatenbank.ihvcb.mongodb.net/Vertragsdatenbank")

//require route
app.use("/", require("./routes/vertragRoute"));


app.listen(3001, function () {

    console.log("express server is running on port 3001");

})