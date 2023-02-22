import prisma from "../db"

//Get all products of a user.
export const getProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.user.id,
    },
    include: {
      Products: true,
    }
  })

  res.json({ data: user.Products })
}


//Get one product
export const getOneProduct = async (req, res) => {
  const id = req.params.id

  const product = await prisma.product.findUnique({
    where: {
      id_userId: {
        id: req.params.id,
        userId: req.user.id
      }
    }
  })

  res.json({ data: product })
}


export const createProduct = async (req, res) => {
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      userId: req.user.id
    }
  })

  res.json({ data: product})
}


export const updateProduct = async (req, res) => {
  const updated = await prisma.product.update({
    where: {
      id_userId: {
        id: req.params.id,
        userId: req.user.id
      }
    },
    data: {
      name: req.body.name
    }
  })

  res.json({ data: updated })
}

export const deleteProduct = async (req, res) => {
  const deleted = await prisma.product.delete({
    where: {
      id_userId: {
        id: req.params.id,
        userId: req.user.id
      }
    }
  })

  res.json({ data: deleted })
}
