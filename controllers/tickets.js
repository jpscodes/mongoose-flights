const Flight = require('../models/flight');
const Destination = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  createTicket,
  new: newTicket,
  addTicketToFlight
};

function createTicket(req, res) {

  Ticket.create(req.body, function (err, ticket) {
    req.body.flight = req.params.id;
    console.log('got here')
    console.log(req.body.seat)
    console.log(req.body.price)
    console.log(ticket)
    console.log(Flight)
    res.redirect(`/flights/${req.params.id}`)
    });
};

function newTicket(req, res) {
  res.render('tickets/new', { flightId: req.params.id });
};

function addTicketToFlight(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    let ticketId = req.params.id;
    flight.ticket.push(ticketId);
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`);
    });
  });
}