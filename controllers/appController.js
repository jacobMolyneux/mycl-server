const User = require('../models/userSchema')
const AWS = require('aws-sdk')
const axios = require('axios')
const {PutObjectCommand, S3Client} = require('@aws-sdk/client-s3')
const { Upload } = require("@aws-sdk/lib-storage");

// aws imports 
const aws_access_key_id = process.env.AWS_ACCESS_KEY_ID
const aws_secret_access_key = process.env.AWS_SECRET_ACCESS_KEY
const aws_region = process.env.AWS_REGION
const aws_bucket = process.env.AWS_BUCKET

exports.get_resume = (req, res) => {
  const userId = req.body.userId
  const resumePath = User.findById(userId, resumePath)
  .then((resume) => {
    res.status(200).json({
      resumePath: resume
    })
  })
  .catch((error) => {
    res.status(404).json({
      message: 'error finding resume :(',
      error
    })
  })
}

exports.upload_resume =  (req, res) => {
    res.json('hello')
  // const UserId = req.body.userId
  // // need to check if resume path exists: ifexists replace otherwise just create
  // const user = User.findByIdAndUpdate(UserId, {resumePath: req.body.resumePath}, function(err, docs){
  //   if(err){
  //       res.status(500).send({err})
  //   }
  //   else{
  //     res.status(201).send({
  //       message: 'resume uploaded',
  //       docs
  //     })
  //   }
  // })
}

exports.create_cover_letter = async (req, res) => {
  try {
    const data = {
      "job_link": req.body.job_link,
      // "resume": req.body.resume,
    }
    const response = await axios.post('http://localhost:5000/cover-letter', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    res.status(200).send({
      data: response.data
    })
}
  catch(error) {
    console.error("Error:", error);
    res.status(400).send({
      error: error.message
    });
  }
};