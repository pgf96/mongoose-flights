const Flight = require('../models/flight')
const Ticket = require ('../models/ticket')

const create = (req,res) => {
    req.body.flight = req.params.id
    const ticket = new Ticket(req.body)
    console.log(ticket)
    ticket.save((err) => {
        if (err) console.log(err)
        res.redirect(`/flights/${req.params.id}`)
    })
}

const newTicket = (req,res) => {
    const id = req.params.id
    console.log(id)
    res.render('tickets/new', {headerTitle: 'new ticket form', id
    })
}

module.exports = {
    create,
    new: newTicket,
}