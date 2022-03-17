const express = require('express')
const UserRoutes = express.Router();
const UserModel = require("../models/Users")

UserRoutes.post("/addUsers", async (req, res) => {
    const name = req.body.name
    const city = req.body.city
    const gender = req.body.gender
    const description = req.body.description
  
    const User = new UserModel({
      name: name,
      city: city,
      gender: gender,
      description: description
    });
  
    try {
      await User.save()
      res.send('data inserted')
    } catch (error) {
       console.log(error)
    }
  
  })
  
  UserRoutes.get('/showData', (req, res) => {
    UserModel.find({},(err,result)=>{
      if(err){
        res.send(err)
      }
      res.send(result)
    });
  
  })
  
  UserRoutes.get('/', (req, res) => {
    res.send('api working ')
  })

  module.exports = UserRoutes;