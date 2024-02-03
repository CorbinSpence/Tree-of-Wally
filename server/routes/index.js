const router = require("express").Router()
const user = require('./user')
const investor = require('./investor')
const admin = require('./admin')

router.use("/user", user)
router.use("/investor", investor)
router.use("/admin", admin)

router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
});

router.get("/", (req, res) => {
    console.log("You have activated the basic get api method.")
    res.status(200).json({message: "Everything is a okay."})
})

module.exports = router