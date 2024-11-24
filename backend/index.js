const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userModel = require("./model/user");


const app = express();
app.use(cors()); // cross origin, to use front end in backend
app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin@cluster0.kw8nf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");

app.post("/translationsData", (req, res) => {
  userModel
    .create(req.body)
    .then((translations) => {
      res.json(translations);
    })
    .catch((err) => res.json(err));
});

app.get("/translationsData", (req,res)=>{
  userModel
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
