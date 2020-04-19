// @login & register
const express = require("express");
const router = express.Router();
const passpost = require("passport");

const Profile = require("../../models/Profile");

/**
 * $route GET api/profiles/test
 * @desc 返回的请求的 json 数据
 * @access public
 */
// Router.get() 方法来响应特定路径的 HTTP GET 请求
router.get("/test", (req, res) => {
    res.json({ msg: "profiles works" });
});

/**
 * $route GET api/profiles/add
 * @desc 创建朋友圈信息接口
 * @access private
 */
router.post("/add", passpost.authenticate("jwt", { session: false }), (req, res) => {
    const profilesFileds = {};
    if (req.body.img) profilesFileds.img = req.body.img;
    if (req.body.name) profilesFileds.img = req.body.name;
    if (req.body.text) profilesFileds.img = req.body.text;

    if (req.body.imgs) {
        profilesFileds.imgs = req.body.imgs.split("|");
    }

    // 存储数据
    // new Profile(profilesFileds).save().then((profile) => {
    //     res.json("sdf");
    // });
});

module.exports = router;
