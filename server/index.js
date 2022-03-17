const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();
require('dotenv').config();
const uri = process.env.DB_URI
const UserRoutes = require("./routes/UserRoutes")


// middlewares
app.use(express.json());
app.use(cors());


// connnecting to db
mongoose.connect(uri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, console.log('connected to database'))

// routes
app.use('/', UserRoutes);


const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`server running on port ${port} ...`);
});
