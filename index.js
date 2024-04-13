import express from 'express'
import jwt from 'jsonwebtoken'
import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://Pipola:9953@cluster0.dwmoi20.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('DB OK'))
  .catch((err) => console.log('DB ERROR', err))

// mongodb + srv://Pipola:<password>@cluster0.dwmoi20.mongodb.net/

const app = express()

app.use(express.json())

app.post('/auth/register', (req, res) => {

})

app.listen(4444, (err) => {
  if (err) return console.log(err)

  console.log('Server OK')
})