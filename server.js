const express = require("express");
const mongoose = require("mongoose");
const app = express();

const db = require("./config/keys").mongoURI;
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => console.log("MonggoDB Connected"),
    (err) => console.log(err)
);

app.get("/", (req, res) => {
    res.send("Hello node!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server runing on port ${port}`);
});
