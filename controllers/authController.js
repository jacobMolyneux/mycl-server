const User = require('../models/userSchema')
const bcrypt = require('bcrypt')


exports.create_account = (req, res) => {
    bcrypt.hash(req.body.password, 10)
    .then((hashedPassword) => {
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hashedPassword
        })
        user.save()
        .then((result) => {
        res.status(201).send({
            message: 'user created',
            result
        })
    })
    .catch((error) => {
        res.status(500).send({
            message: 'error creating user',
            error
        })
    })
    .catch((e) => {
        res.status(500).send({
            message: "password was not hashed successfully",
            e
        })
    })
    
    })
}
        

exports.sign_in = async (req, res) => {
    try{
      const user = await User.find({email:req.body.email})
      .then((response) => {
        if(bcrypt.compare(req.body.password, response[0].password)){
          res.status(200).json(response[0].password)
        }
        else{
          res.status(404).send({
            message: 'there was an error trying to hash the password',
          })
        }

      })
    }
    catch(error){
      res.status(500).send(error)
    }
}
     

exports.get_user = async (req, res) => {
    try{
        const user = await User.find({email:req.body.email})
        res.status(200).send(user)
    }
    catch(error){
        res.status(404).send({
            message: 'error finding user',
            error
        })
    }
    // const user = await User.findById(req.body.userId)
    // res.send(user)
//    
}