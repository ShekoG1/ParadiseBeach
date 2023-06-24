const Booking = require('../modules/Booking');

// READ
const getAllbookings = (req,res,next) => {
    Booking.find()
    .then(response => {
        res.json({
            message: "success",
            response
        })
    })
    .catch(error => {
        res.json({
            message: `failed`
        })
    })
}
const getBookingbyId = (req,res,next) => {
    let bookingId = req.body.bookingId

    Booking.findById(bookingId)
    .then(response => {
        res.json({
            message: "success",
            response
        })
    })
    .catch(error => {
        res.json({
            message: `failed`
        })
    })
}

// CREATE
const createBooking = (req,res,next) => {
    // res.json({
    //     message: req.body
    // })
    let booking = new Booking({
        roomId:         req.body.roomId,
        price:          req.body.price,
        checkIndate:    req.body.checkIndate,
        checkOutdate:   req.body.checkOutdate,
        fullName:       req.body.fullName,
        emailAddress:   req.body.emailAddress,
    });

    booking.save()
    .then(response => {
        res.json({
            message: "success"
        })
    })
    .catch(error => {
        res.json({
            message: `failed`
        })
    })
}

// UPDATE
const updateBooking = (req,res,next) => {
    let updateId = req.body.updateId;
    let updatedBooking = {
        roomId:         req.body.roomId,
        price:          req.body.price,
        checkIndate:    req.body.checkIndate,
        checkOutdate:   req.body.checkOutdate,
        fullName:       req.body.fullName,
        emailAddress:   req.body.emailAddress,
    };

    Booking.findByIdAndUpdate(updateId, {$set:updatedBooking})
    .then(response => {
        res.json({
            message: "success"
        })
    })
    .catch(error => {
        res.json({
            message: `failed`
        })
    })
}

// DELETE
const deleteBooking = (req,res,next) => {
    let deleteId = req.body.updateId;

    Booking.findByIdAndRemove(deleteId)
    .then(response => {
        res.json({
            message: "success"
        })
    })
    .catch(error => {
        res.json({
            message: `failed`
        })
    })
}

module.exports = {
    createBooking,
    getAllbookings,
    getBookingbyId,
    updateBooking,
    deleteBooking
}