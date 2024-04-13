import express from 'express'
import mongoose from 'mongoose'

import { loginValidation, registerValidation, postCreateValidation } from './validations.js'
import checkAuth from './utils/checkAuth.js'
import * as UserController from './controllers/UserController.js'
import * as PostController from './controllers/PostController.js'

mongoose.connect('mongodb+srv://Pipola:9953@cluster0.dwmoi20.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('DB OK'))
  .catch((err) => console.log('DB ERROR', err))
// mongodb + srv://Pipola:<password>@cluster0.dwmoi20.mongodb.net/

const app = express()
app.use(express.json())

app.post('/auth/login', loginValidation, UserController.login)
app.post('/auth/register', registerValidation, UserController.register)
app.get('/auth/me', checkAuth, UserController.getMe)

// app.get('/posts', PostController.getAll)
// app.get('/posts/:id', PostController.getOne)
app.post('/posts', checkAuth, postCreateValidation, PostController.create)
// app.delete('/posts', PostController.remove)
// app.patch('/posts', PostController.update)

app.listen(4444, (err) => {
  if (err) return console.log(err)
  console.log('Server OK')
})