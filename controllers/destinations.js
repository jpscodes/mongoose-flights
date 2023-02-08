const Flight = require('../models/flight');
const Destination = require('../models/flight');

module.exports = {
  addDestination
};



function addDestination(req, res) {
	console.log(req.body);
  Flight.findById(req.params.id, function(err, flight) {
    flight.destinations.push(req.body);
		console.log(flight)
    flight.save(function(err) {
			console.log(err);
      res.redirect(`/flights/${flight._id}`);
    })
  }) 
}