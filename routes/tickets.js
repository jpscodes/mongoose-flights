var express = require('express');
var router = express.Router();
var ticketsCtrl = require('../controllers/tickets');

router.post('/flights/:id/tickets', ticketsCtrl.createTicket);
router.get('/flights/:id/tickets/new', ticketsCtrl.new);
router.post('/flights/:id/tickets', ticketsCtrl.addTicketToFlight)

module.exports = router;