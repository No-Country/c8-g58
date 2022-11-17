const { User } = require('../../db')

const postUser = async(req, res) => {
  try {
    const { name, password, dni, years, email, image, cel } = req.body

    const userCreated = await User.create({
      name,
      password,
      dni,
      years,
      email,
      image,
      cel
    })
    res.status(200).json(userCreated)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  postUser
}