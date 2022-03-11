const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const app = express();


// middlewares
require('dotenv').config();
app.use(express.json());
app.use(cors());

// connnecting to db


// route 

app.get('/',(res,req)=>{
  res.send('api working ')
})
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server running on port ${port} ...`);
});
