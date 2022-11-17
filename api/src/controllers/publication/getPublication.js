const axios = require('axios')
const { User, Publication } = require('../../db')

const getPublications = async(req, res) => {
  const publicationsDb = await Publication.findAll({})
  res.status(200).json(publicationsDb)
}

const getPublicationByName = async(req, res) => {

  res.status(200).json('name')
}

const getPublicationDetail = async(req, res) => {
  const { id } = req.params
  const idUUID = id.length
  console.log(idUUID)
  try {
    if(idUUID !== 36){
      res.status(200).json('codigo de la api')
    } else if(idUUID === 36){
      const publicationDetail = await Publication.findAll({
        where: { id : id }
      })
      publicationDetail.length > 0 ?
      res.status(200).json(publicationDetail) :
      res.status(500).send('No existe este codigo')
    }
  } catch (error) {
    console.log(error.message)
  }
}

const getPublicationByLocation = async(req, res) => {
  const { location } = req.params
  if(location){
    const locationDb = location.toLowerCase()
    const pubsByLocation = await Publication.findAll({
      where: { location: locationDb }
    })
    pubsByLocation.length > 0 ? 
    res.status(200).json(pubsByLocation) :
    res.status(500).json('No hay aca, perro')
  }
}

const getPublicationByEvent = async(req, res) => {
  const { event } = req.params
  const eventDb = event.toLowerCase()
  if(event){
    const pubsByEvent = await Publication.findAll({
      where: { event: eventDb }
    })
    pubsByEvent.length > 0 ? 
    res.json(pubsByEvent) :
    res.json('No hay aca, perro')
  }
}

module.exports = {
  getPublications,
  getPublicationDetail,
  getPublicationByName,
  getPublicationByLocation,
  getPublicationByEvent
}