const { User } = require('../../db')

const postUser = async(req, res) => {
  try {
    const { id, name, password, dni, years, email, image, cel } = req.body

    const nameArray = name.split(' ')
    for (let i = 0; i < nameArray.length; i++){
      const caracterName = nameArray[i].split('')
      caracterName[0] = caracterName[0].toUpperCase()
        for (let i = 1; i < caracterName.length; i++) {
          caracterName[i] = caracterName[i].toLowerCase()     
        }
      const modCarac = caracterName.join('')
      nameArray[i] = modCarac
    }
    const nameDb = nameArray.join(' ')

    const userCreated = await User.create({
      id,
      name: nameDb,
      password,
      dni,
      years,
      email: email.toLowerCase(),
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