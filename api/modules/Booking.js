const mongoose  = require('mongoose');
const schema    = mongoose.Schema;

const bookingSchema = new schema({
        roomId: {
            type: Number
        },
        price: {
            type: Number
        },
        checkIndate: {
            type: String
        },
        checkOutdate: {
            type: String
        },
        fullName: {
            type: String
        },
        emailAddress: {
            type: String
        }
    },
    {timestamps: true}
);

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;