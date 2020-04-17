const express = require("express");
const mongoose = require("mongoose");
const app = express();

// 引入 users.js
const users = require("./routes/api/users");

// db config
const db = require("./config/keys").mongoURI;

// connect to mongodb
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => console.log("MonggoDB Connected"),
    (err) => console.log(err)
);

app.get("/", (req, res) => {
    res.send("Hello node!");
});

// 使用 routes
app.use("/api/users", users);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server runing on port ${port}`);
});
