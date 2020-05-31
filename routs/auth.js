const express = require('express');
const router = express.Router();

// @route    POST api/auth
//@desc      Get logged in User
//@access    Private
router.post(`/`, (req,res) => {
    res.send(`Get logged in User`);
});

module.exports = router;