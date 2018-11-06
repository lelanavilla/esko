const mongoose = require('mongoose')
const {Schema} = mongoose;


const imageSchema = new Schema({
   url: String
}
)

const ImagesModel = mongoose.model("images",imageSchema);

module.exports = ImagesModel