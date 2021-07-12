const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    Name : String,
    Matric_Number : String,
    Date_Time : String
})

const UserModel = mongoose.model('customers',userSchema)

module.exports = scheme