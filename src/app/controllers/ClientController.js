const { User, Appointment } = require('../models')

class ClientController {
  async index (req, res) {
    const appointments = await Appointment.findAll({
      where: {
        provider_id: req.params.barber
      }
    })
    const clients = await User.findAll({
      where: {
        provider: false
      }
    })
    return res.render('dashboard', { clients, appointments })
  }
}

module.exports = new ClientController()
