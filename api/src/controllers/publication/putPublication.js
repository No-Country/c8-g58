const { Publication } = require('../../db')

const putLocation = async(req, res) => {
  const { id } = req.params
  const { location } = req.body
  try {
    const publication = await Publication.findByPk(id)
    publication.location = location
    await publication.save()
    res.status(200).json(publication)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  putLocation
}