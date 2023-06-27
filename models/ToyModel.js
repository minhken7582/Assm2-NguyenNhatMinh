var mongoose = require('mongoose')
var ToySchema = mongoose.Schema(
    {
        name : String,
        brand : String,
        source : String,
        price : Number,
        quantity : Number,
        image : String,
        video : String,
        category : String
    }
)

var ToyModel = mongoose.model('do choi', ToySchema, "toys")
module.exports = ToyModel