import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"


export const comparePasswords = (passwd, hash) => {
  return bcrypt.compare(passwd, hash)
}

export const hashPassword = (passwd) => {
  return bcrypt.hash(passwd, 5)
}

export const createJwt = (user) => {
  const token = jwt.sign({
    id: user.id,
    username: user.username
  },
    process.env.JWT_SECRET)

  return token
}


export const protect = (req, res, next) => {
  const bearer = req.headers.authorization

  if (!bearer) {
    res.status(401)
    res.json({ "message": "401 Not authorized" })
    return
  }

  const [, token] = bearer.split(" ")

  if (!token) {
    res.status(401)
    res.json({ "message": "Not a valid token" })
    return
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET)
    req.user = user
    next()
  }
  catch (e) {
    console.log(e)
    res.status(401)
    res.json({ "message": "Not a valid token" })
    return

  }

}
