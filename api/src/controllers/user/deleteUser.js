const { User } = require('../../db')

const deleteUser = async(req, res) => {
  const { id } = req.params
  try {
    if(id){
      await User.destroy({
        where: { id: id}
      })
      res.status(200).send(`User ${id} has been deleted`)
    }
  } catch (error) {
    res.status(500).send(error.message)
  }
}

module.exports = {
  deleteUser
}