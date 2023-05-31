const express = require("express");
const router = express.Router();

// 클라이언트와의 api 연동 테스트 코드

router.get("/", (req, res) => {
    res.send({test : "hi"});
})

module.exports = router;