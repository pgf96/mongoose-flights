const Flight = require('../models/flight')



const create = (req,res) => {
    Flight.findById(req.params.id, (err, flight) => {
            flight.destinations.push(req.body)
            flight.save(function(err) {
                res.redirect(`/flights/${flight._id}`)
            })
    })
}

module.exports = {
    create,
}