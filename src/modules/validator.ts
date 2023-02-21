import { validationResult } from "express-validator";

export const validation = (req, res) => {
const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });

 }
}
