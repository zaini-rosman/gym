const express = require ('express')
const  mongoose = require('mongoose')
const app = express()

const port = process.env.PORT || 1919

mongoose.connect("mongodb+srv://m001-student:m001-mongodb-basics@sandbox.ehulh.mongodb.net/gymnasium?retryWrites=true&w=majority" , {
useNewParser: true,
useUnifiedTopology : true
}, () => {
console.log('Connected to mongodb atlas') 
})



app.get('/',(req,res) => {
    res.send('Hi Zaini')
})

app.listen(process.env.PORT || 1919)