const User = require('../models/userSchema')
exports.get_resume = async (req, res) => {
    try{
        const user = await User.findById(req.body.userId)
        .then((result) => {
            resumePath = result.resumeFilePath
            //get resume path from mongodb 

            // fetch resume file from aws s3 bucket
            
        })

    }
    catch(error){
        res.status(404).send({
            message: 'error finding resume',
            error
        })

    }

}

exports.change_resume = (req, res) => {
    res.send('update resume endpoint')
}