const User = require('../models/userSchema')
const AWS = require('aws-sdk')

exports.get_resume = (req, res) => {
  console.log('get resume')
}
exports.uploadResume = (req, res) => {
  const params = {
    Bucket: 'mycl-bucket',
    Key: `uploads/${req.file.originalname}`, // Specify the S3 object key
    Body: req.file.buffer, // File content as a Buffer
  }
  s3.upload(params, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send({error: 'failed to upload to s3'})
    }
    else
    return res.send({
      message: 'File uploaded successfully', 
      fileUrl: data.location
    })
  
  })
}