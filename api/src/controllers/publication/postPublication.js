const { Publication } = require('../../db')

const postPublication = async(req, res) => {
  try {
    const { image, text, event, location } = req.body

    const publicationCreated = await Publication.create({
      image,
      text,
      event: event.toLowerCase(),
      location: location.toLowerCase()
    })
    res.status(200).json(publicationCreated)
  } catch (error) {
    res.status(500).json(error.message)
  }

}

module.exports = {
  postPublication
}