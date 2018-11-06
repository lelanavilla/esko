const express = require('express');
const imagesRouter = express.Router();
const ImagesModel = require('../models/imagesModel')




//GET ALL IMAGES
imagesRouter.get('https://api.mlab.com/api/1/databases/esko/collections/images?apiKey=Ze6DXE7-kh0On7lkKPOPYuRvHoslMSJa', (req, res)=>{
  ImagesModel.find(req.query, (err, foundImages)=>{
      if(err) return res.send("ERR HAPPENED WHILE TRYING TO GETT ALL IMAGES-----",err);
      res.status(200).send(foundImages);
  }) 
})

//P0ST NEW IMAGE

imagesRouter.post('https://api.mlab.com/api/1/databases/esko/collections/images?apiKey=Ze6DXE7-kh0On7lkKPOPYuRvHoslMSJa', (req, res)=>{
    const newImage = new ImagesModel(req.body);
    newImage.save((err, addedImage)=>{
        if(err) return res.send("ERR WHEN TRYING TO ADD IMAGE-----",err);
        res.status(201).send(addedImage)
        //NOTE TO SELF:if its not addedImage to be sent it is newImage
    })
})

//GET ONE IMAGE FILE
imagesRouter.get('https://api.mlab.com/api/1/databases/esko/collections/images?apiKey=Ze6DXE7-kh0On7lkKPOPYuRvHoslMSJa/:id', (req,res)=>{
    ImagesModel.findone({
        _id: req.params.id
    },
      (err,foundImage)=>{
if(err) return res.send("ERR WHEN GETING A SINGLE IMAGE FILE", err);
if(!foundImage) return res.status(404);
res.status(200).send(foundImage)
         })
})
//DELETE AN IMAGE
imagesRouter.delete('https://api.mlab.com/api/1/databases/esko/collections/images?apiKey=Ze6DXE7-kh0On7lkKPOPYuRvHoslMSJa/:id', (req, res)=>{
    ImagesModel.findOneAndRemove({
        _id: req.params.id}, (err, deletedImage)=>{
            if(err) return res.status(404)
            if(!deletedImage) return res.status(404)
            res.status(200).send({message:'Image successfully Deleted!'})
         })
})

module.exports = imagesRouter