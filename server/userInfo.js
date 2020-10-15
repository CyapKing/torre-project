var express = require('express');
var router = express.Router();
const userInfo = require('./model/userInfoData')

router.get("/", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200);
    res.json(userInfo);
})

module.exports = router;