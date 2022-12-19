const Flight = require('../models/flight')
const Ticket = require('../models/ticket')

const index = (req,res) => {
    Flight.find({}, (err,flights) => {
        res.render("flights/index", { headerTitle: "All Flights", flights})
    })
}

const create = (req,res) => {
        //req.body 
    // use model to create w/ req.body
    //save
    // if depart is empty
    for(key in req.body) {
        if(req.body[key]=== '') delete req.body[key]
    }
    const flight = new Flight(req.body)
    flight.save((err) => {
        if(err) return res.redirect('flights/new')
        res.redirect('/flights')
    })
}

const newFlight = (req,res) => {
    //display new
    res.render('flights/new', {headerTitle: "Add New Flight", })
}

// const show = (req,res) => {
//     Flight.findById(req.params.id, (err, flight) => {
//         res.render('flights/show', {headerTitle: "Flight Details", flight})
//     })
// }

const show = (req,res) => {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
          // Now you can pass both the flight and tickets in the res.render call
            res.render('flights/show', {
                headerTitle: "Flight Details",
                flight,
                tickets,
            })
        });
    });
    
}

module.exports = {
    index,
    create,
    new: newFlight,
    show,
}


