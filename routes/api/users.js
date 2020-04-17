// @login & register
const express = require("express");
const router = express.Router();

/**
 * $route GET api/users/test
 * @desc 返回的请求的 json 数据
 * @access public
 */
// Router.get() 方法来响应特定路径的 HTTP GET 请求
router.get("/test", (req, res) => {
    res.json({ msg: "login works" });
});

module.exports = router;
