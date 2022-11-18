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

const putName = async(req, res) => {
  const { id } = req.params
  const { name } = req.body
  try {
    const publication = await Publication.findByPk(id)
    publication.name = name
    await publication.save()
    res.status(200).json(publication)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const putImage = async(req, res) => {
  const { id } = req.params
  const { image } = req.body
  try {
    const publication = await Publication.findByPk(id)
    publication.image = image
    await publication.save()
    res.status(200).json(publication)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const putText = async(req, res) => {
  const { id } = req.params
  const { text } = req.body
  try {
    const publication = await Publication.findByPk(id)
    publication.text = text
    await publication.save()
    res.status(200).json(publication)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

const putEvent = async(req, res) => {
  const { id } = req.params
  const { event } = req.body
  try {
    const publication = await Publication.findByPk(id)
    publication.event = event
    await publication.save()
    res.status(200).json(publication)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  putLocation,
  putName,
  putImage,
  putText,
  putEvent
}