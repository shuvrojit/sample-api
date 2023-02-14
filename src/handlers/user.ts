import prisma from "../db"
import { comparePasswords, createJwt, hashPassword } from "../modules/auth"

export const createNewUser = async (req, res) => {
  const hash = await hashPassword(req.body.password)

  const doesExist = await prisma.user.findUnique({
    where: {
      username: req.body.username
    }
  })

  if (doesExist) {
    res.status(401)
    res.json({"message":"username already exists"})
    return
  }

  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: hash,
    },
  })

  const token = createJwt(user)
  res.json({ token })
}

export const signin = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username
    }
  })

  const isValid = await comparePasswords(req.body.password, user.password)

  if (!isValid) {
    res.status(401)
    res.json({"message":"Not authorized"})
    return
  }

  const token = createJwt(user)
  res.json({token})
}
