const mongoose = require('mongoose')

const Schema = mongoose.Schema

const destinationSchema = new Schema ({
    airport:{
        type: String,
    },
    arrival: {
        type: Date
    },
})

const flightSchema = new Schema ({
    airline: {
        type: String,
    },
    airport: {
        type: String,
        default: "DEN"
    },
    flightNo: {
        type: Number, min: 10, max: 9999,  
        required: true, 
    },
    departs: {
        type: Date,
        default: () => new Date(+new Date() + 365*24*60*60*1000)
    },
    destinations: [destinationSchema],
    status: {
        type: String,
        default: "Scheduled"
    }
    
})


module.exports = mongoose.model('Flight', flightSchema)