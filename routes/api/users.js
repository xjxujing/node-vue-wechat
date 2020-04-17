// @login & register
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../../models/User");

/**
 * $route GET api/users/test
 * @desc 返回的请求的 json 数据
 * @access public
 */
// Router.get() 方法来响应特定路径的 HTTP GET 请求
router.get("/test", (req, res) => {
    res.json({ msg: "login works" });
});

/**
 * $route POST api/users/test
 * @desc 返回的请求的 json 数据
 * @access public
 */
router.post("/register", (req, res) => {
    // console.log(req.body);

    // 查询数据库是否有邮箱
    User.findOne({ email: req.body.email }).then((user) => {
        if (user) {
            return res.status(400).json({ email: "邮箱已被注册！" });
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            });

            bcrypt.genSalt(10, function (err, salt) {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;

                    // Store hash in your password DB.
                    newUser
                        .save()
                        .then((user) => {
                            res.json(user);
                        })
                        .catch((err) => {
                            console.log("错误：", err);
                        });
                });
            });
        }
    });
});

module.exports = router;
