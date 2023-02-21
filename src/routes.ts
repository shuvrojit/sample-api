import { Router } from "express"
import { body } from "express-validator";
import { validation } from "./modules/validator";


const router = Router()
const updateItems = ["title", "body", "status", "version", "asset"]
const updatePoints = ["name", "description"]

router.get("/product/", (req, res) => {
  res.json({ message: req.secret_sh });
})
router.get("/product/:id", (req, res) => {})
router.post("/product/", [body("name").isString(), validation], (req, res) => {})
router.put("/product/:id", [body("name").isString(), validation], (req, res) => {


})
router.delete("/product/:id", (req, res) => {})

router.get("/update/", (req, res) => {})
router.get("/update/:id", (req, res) => {})
router.post("/update/", [body(updateItems).isString(), body("updatedAt").isDate(), validation], (req, res) => {})
router.put("/update/:id", [body(updateItems).isString(), body("updatedAt").isDate(), validation], (req, res) => {})
router.delete("/update/:id", (req, res) => {})



router.get("/update-point/", (req, res) => {})
router.get("/update-point/:id", (req, res) => {})
router.post("/update-point/", [body(updatePoints).isString(), body("updatedAt").isDate(), validation], (req, res) => {})
router.put("/update-point/:id", [body(updatePoints).isString(), body("updatedAt").isDate(), validation], (req, res) => {})
router.delete("/update-point/:id", (req, res) => {})


export default router
