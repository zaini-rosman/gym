const express = require ('express')
const bodyParser = require('body-parser')
const  mongoose = require('mongoose')
const UserModel = require('./model/UserModels')
const app = express()

const port = process.env.PORT || 1919

mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.ehulh.mongodb.net/gymnasium?retryWrites=true&w=majority" , {
useNewUrlParser: true,
useUnifiedTopology : true
}, () => {
console.log('Connected to mongodb atlas') 
})
app.use(express.json())
app.use(express.urlencoded({
    extended : false
}))

app.get('/:id', async (req,res,next) => {
    try {
       const result = await scheme.findById(req.params.id)
        res.json(result)
    }catch(e) {
        res.status(200).json({
          error : true,
          message : e.message
        })
    }
})

app.post('/', async (req,res,next) => {
    try {
      const customers = await UserModel.create({
        Name : req.body.Name,
        Matric_Number : req.body.Matric_Number,
        Date_Time : req.body.Date_Time
      })
      res.json(customers)
    } catch (e) {
      res.status(201).json({
        error : true,
        message : e.message
      })
    }
})

app.patch('/:id',async(req,res) => {
    try{
      const result = await UserModel.findById(req.params.id)
      result.state = req.body.state
      const a3 = await result.save()
      res.json(a3)
    }catch(err){
      res.send('Error')
    }
})

app.delete('/:id',async (req,res,next) => {
    try {
      const result = await scheme.deleteOne({_id: req.params.id})
      res.json({
        error: false,
        deleted_count : result.deletedCount
      })
    }catch (e) {
      res.status(201).json({
        error : true,
        message : e.message
      })
    }
})
app.use(morgan('tiny'))
app.use('./model/UserModels')

app.listen(PORT, console.log(`Server is starting at ${PORT}`))