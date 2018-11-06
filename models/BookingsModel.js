const mongoose = require('mongoose')
const {Schema} = mongoose;

const bookingsSchema = new Schema({
    url:String
})
const BookingsModel = mongoose.model("bookings",bookingsSchema);
//NOTE TO SELF PRIOR "BOOKINGS" MIGHT BE BookingsModel"

module.exports = BookingsModel