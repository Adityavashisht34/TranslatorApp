const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const translationModel = require("./model/translation")
const userModel = require("./model/user")


const app = express();
app.use(cors()); // cross origin, to use front end in backend
app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin@cluster0.kw8nf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

app.post("/translationsDataMain", (req, res) => {
  translationModel
    .create(req.body)
    .then((translations) => {
      res.json(translations);
    })
    .catch((err) => res.json(err));
});

app.post("/signup", (req,res)=>{
  userModel.create(res.body)
  .then(user=>res.json(user))
  .catch(err=>res.json(err))
})

app.post("/login", (req,res)=>{
  const {email,password} = req.body
  userModel.findOne({email:email})
  .then(user=>{
    if(user){
      if(user.password===password){
        res.json("Success")
      }
      else{
        res.json("The password is incorrect")
      }
    }
    else{
      res.json("No record existed")
    }
  })
})

app.get("/translationsDataMain", (req,res)=>{
  translationModel
  .find()
  .then((users)=>{
    res.json(users)
  })
  .catch(err=>res.json(err))
})


app.listen(3001, () => {
  console.log("Server is running");
  console.log("Aditya's Server is running");
});