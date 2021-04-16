//HTML routes

const router = require('express').Router()
const path = require('path')

//route to the home page
router.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

//route to the exercise page
router.get('/exercise', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/exercise.html'))
})

//route to the stats page
router.get('/stats', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/stats.html'))
})

module.exports = router