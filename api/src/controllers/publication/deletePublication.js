const { Publication } = require('../../db')

const deletePublication = async(req, res) => {
  const { id } = req.params
  try {
    await Publication.destroy({
      where: { id: id }
    })
    res.status(200).send(`Publication ${id} has been deleted`)
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  deletePublication
}