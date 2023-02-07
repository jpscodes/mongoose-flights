const mongoose = require('mongoose');

const Schema = mongoose.Schema; 

const flightSchema = new Schema({
    airline: { 
        type: String,
        enum: ['American', 'Southwest', 'United', 'Delta']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN', 'SEA', 'PDX'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        min: 10,
        max: 9999,
    },
    departs: {
        type: Date,
        default: new Date().toLocaleDateString()  //Date.now() + 365*24*60*60000
    }
}, {timestamps: true});

module.exports = mongoose.model('flight', flightSchema);