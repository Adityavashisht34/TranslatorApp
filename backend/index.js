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
  const { userId, fromlanguage, fromtranslation, tolanguage, totranslation, date } = req.body;

  translationModel
      .create({ userId, fromlanguage, fromtranslation, tolanguage, totranslation, date })
      .then((translation) => {
          // Update the user document to include the new translation ID
          userModel.findByIdAndUpdate(
              userId,
              { $push: { translations: translation._id } }, // Push the new translation ID into the translations array
              { new: true } // Return the updated document
          )
          .then(() => res.json(translation))
          .catch(err => res.status(500).json(err));
      })
      .catch((err) => res.status(500).json(err));
});

app.get("/userTranslations/:userId", (req, res) => {
  const userId = req.params.userId;

  userModel.findById(userId)
      .populate('translations') // Populate the translations array with translation documents
      .then(user => {
          if (!user) {
              return res.status(404).json({ message: "User  not found" });
          }
          res.json(user.translations); // Return the user's translations
      })
      .catch(err => res.status(500).json(err));
});

app.get("/user/:userId", (req, res) => {
  const userId = req.params.userId;

  userModel.findById(userId)
      .then(user => {
          if (!user) {
              return res.status(404).json({ message: "User  not found" });
          }
          res.json({ name: user.name, email: user.email }); // Return user's name and email
      })
      .catch(err => res.status(500).json(err));
});

app.post("/signup", (req,res)=>{
  userModel.create(req.body)
  .then(user=>res.json(user))
  .catch(err=>res.json(err))
})

app.get('/history', (req, res) => {
  const user = req.query.user;
  // Fetch user-specific history from the database
  db.query('SELECT * FROM history WHERE user = ?', [user], (err, results) => {
      if (err) {
          return res.status(500).send('Error fetching history');
      }
      res.json(results);
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  userModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          // Store userId in local storage on the client side
          res.json({ success: true, userId: user._id, name: user.name }); // Send userId back to client
        } else {
          res.json({ success: false, message: "The password is incorrect" });
        }
      } else {
        res.json({ success: false, message: "No record existed" });
      }
    })
    .catch(err => res.json(err));
});

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