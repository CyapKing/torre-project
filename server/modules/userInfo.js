var express = require('express');
var axios = require('axios')
var router = express.Router();

const userInfo = require('../model/userInfoData')

router.get("/:username", function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    axios.get(`https://torre.bio/api/bios/${req.params.username}`).then(response => {
        res.status(200)
        res.json(userInfo(response.data))
    }).catch(error=>{
        res.status(500)
        res.json('Internal Server Error')
    })
})

module.exports = router;