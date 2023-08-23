const User = require('../models/userSchema')
const bcrypt = require('bcrypt')


exports.create_account = (req, res) => {
    // bcrypt.hash(req.body.password, 32)
    // .then((hashedPassword) => {
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        })
        user.save()
        .then((result) => {
        res.status(200).send({
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

    // })
    // .catch((err) => {
    //     console.error('Hashing error:', err);
    //     res.status(500).send({
    //         message: 'Password was not hashed correctly',
    //         err
    //     });
    // })
}

exports.sign_in = (req, res) => {
    User.findOne({email: req.body.email})
    .then((user) => {
        bcrypt.compare(req.body.password, user.password)
        .then((passwordCheck)=> {
            if(!passwordCheck) {
                return response.status(400).send({
                    message: 'passwords dont match',
                    error
                })

            }
            const token =jwt.sign(
                {
                userId: user._id, 
                userEmail: user.email
                },
                "RANDOM-TOKEN",
                {expiresIn:"24h"}
            );
            res.status(200).send({
                message: 'login succesful',
                email: user.email,
                token,
            })
        })
        .catch((error) => {
            res.status(400).send({
                message: 'passwords do not match',
                error
            })
        })
    })
    .catch((e) => {
        res.status(404).send({
            message: "email not found",
            e
        })
    })
}

exports.get_user = async (req, res) => {
    try{
        const user = await User.findById(req.body.userId)
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