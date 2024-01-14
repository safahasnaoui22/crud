const express = require ('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/Users')
mongoose
  .connect("mongodb+srv://crud2:crud2@cluster0.z96irs3.mongodb.net/")
  .then(() => {
    console.log("connected to mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express ()
app.use(cors())
app.use(express.json())

app.get('/' , (req , res) => {
  UserModel.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})


app.get('/getUser/:id' , (req , res) => {
  const id = req.params.id;
  UserModel.findById({_id:id})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.delete('/deleteUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete(id)
    .then(user => {
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User deleted successfully', user });
    })
    .catch(err => res.status(500).json({ error: err.message }));
});


app.put('/updateUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate(id, {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  }, { new: true })
    .then(user => res.json(user))
    .catch(err => res.json(err));
});


app.post("/createUser" , (req , res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });