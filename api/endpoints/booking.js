const express   = require('express');
const router    = express.Router()
const BookingController = require('../controller/bookingController')

router.get('/getAll',BookingController.getAllbookings)
router.post('/getByid',BookingController.getBookingbyId)
router.post('/create',BookingController.createBooking)
router.post('/updateByid',BookingController.updateBooking)
router.post('/deleteByid',BookingController.deleteBooking)

module.exports = router