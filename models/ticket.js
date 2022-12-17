const mongoose = require('mongoose')

const Schema = mongoose.Schema


//  input pattern html

const ticketSchema = new Schema({
    seat: {type: String, match: /[A-F][1-9]\d?/},
    price: {
        type: Number, min: 0,
    },
    flight:{
        type:Schema.Types.ObjectId, ref: 'Flight',
    },
})

// const Flight = new mongoose.model("Ticket", ticketSchema)

// const data = new Flight({
//     airline: 'american',
//     airport: 'DEN',
//     flightNo: 104,
//     departs: new Date
// })
// data.save()

module.exports = mongoose.model('Ticket', ticketSchema)