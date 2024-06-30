const router = require('express').Router()
const controller=require("../controller/controller")

router.get("/movies",controller.getAllData)
router.post("/movies",controller.postData)
router.delete("/movies/:id",controller.deleteById)
router.get("/movies/:id",controller.getById)
router.patch("/movies/:id",controller.patchById)
router.put("/movies/:id",controller.puthById)

module.exports=router