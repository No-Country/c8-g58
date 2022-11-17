const axios = require('axios')
const { User, Publication } = require('../../db')

const getPublications = async(req, res) => {
  const publicationsDb = await Publication.findAll({})
  res.status(200).json(publicationsDb)
}

const getPublicationByName = async(req, res) => {
  const publicationsDb = await Publication.findAll({})
  res.status(200).json(publicationsDb)
}

const getPublicationDetail = async(req, res) => {
  const publicationsDb = await Publication.findAll({})
  res.status(200).json(publicationsDb)
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