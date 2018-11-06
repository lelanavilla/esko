const express = require('express');
const bookingsRouter = express.Router();

const BookingsModel = require('../models/BookingsModel')


//GET ALL IMAGES
bookingsRouter.get('/', (req, res)=>{
  BookingsModel.find(req.query, (err, foundBookings)=>{
      if(err) return res.send("ERR HAPPENED WHILE TRYING TO GET ALL BOOKINGS-----",err);
      res.status(200).send(foundBookings);
  }) 
})

//ADD AN IMAGE

bookingsRouter.post('/', (req,res)=>{
    const newBooking = new BookingsModel(req.body);
    newBooking.save((err, addedBooking)=>{
        if(err) return res.send("ERR WHEN TRYING TO ADD BOOKING-----",err);
        res.status(201).send(addedBooking)
        //NOTE TO SELF:if its not addedBooking to be sent it is newImage
    })
})

//GET ONE IMAGE FILE
bookingsRouter.get('/:id', (req,res)=>{
    BookingsModel.findone({_id: req.params.id},(err,foundBooking)=>{
if(err) return res.send("ERR WHEN GETING A SINGLE IMAGE FILE", err);
if(!foundBooking) return res.status(404);
res.status(200).send(foundBooking)
         })
})
//DELETE AN IMAGE
bookingsRouter.delete('/:id', (req, res)=>{
    BookingsModel.findOneAndRemove({
        _id: req.params.id}, (err, deletedBooking)=>{
            if(err) return res.status(404)
            if(!deletedBooking) return res.status(404)
            res.status(200).send({message:'Booking Successfully Deleted!'})
         })
})

module.exports = bookingsRouter;