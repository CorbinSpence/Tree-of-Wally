const router = require("express").Router()

router.get("/", (req, res) => {
    console.log("You have activated the basic get api method.")
    res.status(200).json({message: "Everything is a okay."})
})

module.exports = router