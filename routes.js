var express = require('express');
var router = express.Router();
var movies = require('./models/movies')


router.post("/movies", async (req, res) => {
    const imovie = new movies({
        name: req.body.name,
        rating: req.body.rating
    })

    await imovie.save((err, msg) => {
        if (err) {
            res.status(500).json({
                "error": err
            })
        }
        else {
            res.status(200).json({
                "My-message": msg
            })
        }
    })

})
module.exports = router