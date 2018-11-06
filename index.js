const express = require ('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')


const app = express();
const port = 3000;
const apiKey= "Ze6DXE7-kh0On7lkKPOPYuRvHoslMSJa"
const  db="mongodb://lelanavilla:getmoney88@ds139243.mlab.com:39243/esko" || "mongodb://localhost:27017"

//MIDDLEWARE
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,"client","build")))
 //ROUTES
const imagesRouter = require('./routes/imagesRouter.js')
const bookingsRouter = require('./routes/bookingsRouter.js')

app.use('/api/images', imagesRouter)
app.use('/api/bookings', bookingsRouter)

app.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
});

mongoose.connect(db, (err)=>{
    if(err) console.log("DATABASE CONNECTION ERR--------",err);
console.log('Successfully connnected to esko-photography db ')
})

app.listen(port, ()=> console.log("Esko server running on port " + port))