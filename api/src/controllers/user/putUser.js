const { User } = require('../../db')

const putEmail = async(req, res) => {
  const { id } = req.params
  const { email } = req.body
  try {
    const user = await User.findByPk(id)
    user.email = email
    await user.save()
    res.status(200).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const putPassword = async(req, res) => {
  const { id } = req.params
  const { password } = req.body
  try {
    const user = await User.findByPk(id)
    user.password = password
    await user.save()
    res.status(200).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const putImage = async(req, res) => {
  const { id } = req.params
  const { image } = req.body
  try {
    const user = await User.findByPk(id)
    user.image = image
    await user.save()
    res.status(200).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const putCel = async(req, res) => {
  const { id } = req.params
  const { cel } = req.body
  try {
    const user = await User.findByPk(id)
    user.cel = cel
    await user.save()
    res.status(200).json(user)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  putEmail,
  putPassword,
  putImage,
  putCel
}