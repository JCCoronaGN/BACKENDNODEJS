const router = require("express").Router();

router.get('/', (req,res) => {
    res.send("Bienvenido a BeduSHop")
})

router.use('/usuarios', require('./usuario'));
router.use('/dietas',require('./dieta'));
module.exports = router;