import { Router } from "express"
import { body } from "express-validator";
import { createProduct, deleteProduct, getOneProduct, getProducts, updateProduct } from "./handlers/product";
import { validation } from "./modules/validator";


const router = Router()

router.get("/products/", getProducts)

router.get("/product/:id", getOneProduct)

router.post("/product/", [
  body("name").exists().isString(),
  validation
], createProduct)

router.put("/product/:id", [
  body("name").exists().isString(),
  validation
], updateProduct)

router.delete("/product/:id", deleteProduct)

router.get("/update/", (req, res) => {})

router.get("/update/:id", (req, res) => {})

router.post("/update/", [
  body("title").exists().isString(),
  body("body").exists().isString(),
  body("asset").exists().isString(),
  body("version").exists().isString(),
  body("status").isIn(["IN_PROGRESS", "LIVE", "DEPRECATED", "ARCHIVED"]),
  validation
], (req, res) => {
})

router.put("/update/:id", [
  body("title").optional().isString(),
  body("body").optional().isString(),
  body("asset").optional().isString(),
  body("version").optional().isString(),
  body("status").isIn(["IN_PROGRESS", "LIVE", "DEPRECATED", "ARCHIVED"]),
  validation
], (req, res) => {})

router.delete("/update/:id", (req, res) => {})



// router.get("/update-point/", (req, res) => {})

// router.get("/update-point/:id", (req, res) => {})

// router.post("/update-point/", [
//   body(updatePoints).isString(),
//   body("updatedAt").isDate(),
//   validation
// ], (req, res) => {})

// router.put("/update-point/:id", [
//   body("title").optional().isString(),
//   validation
// ], (req, res) => {})

// router.delete("/update-point/:id", (req, res) => {})


export default router
