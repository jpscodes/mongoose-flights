const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'SEA']
    },
    arrival: {
        type: Date
    }
});

const flightSchema = new Schema({
    airline: { 
        type: String,
        enum: ['American', 'Southwest', 'United', 'Delta']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'SEA'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: new Date(Date.now() + 365*24*60*60000)
    },
    destinations: [destinationSchema]
}, {timestamps: true});



module.exports = mongoose.model('flight', flightSchema);