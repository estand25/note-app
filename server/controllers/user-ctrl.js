const User = require('../models/user-model')

createUser = (req, res) => {
    const body = req.body

    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must provide Sign-In Information',
        })
    }

    const user = new User(body)

    if(!user){
        return res.status(400).json({
            success: false,
            error: err
        })
    }       
        
    User.findOne({username: req.body.username}, (err, user_) => {
        if(err) {
            console.log(err);
        }
        
        if(user_) {
            return res.json({
                success: false,
                message: "user exists"
            });

        } else {
            user
                .save()
                .then(() => {
                    return res.status(201).json({
                        success: true,
                        id: user._id,
                        message: 'User Created!',
                    })
                })
        }

    })
}

updateUser = (req, res) => {
    const body = req.body

    if(!body){
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to'
        })
    }

    User.findOne({_id: req.params.id}, (err,user) => {
        if(err) {
            return res.status(404).json({
                err,
                message: 'User Not found!',
            })
        }

        user.username = body.username
        user.email = body.email
        user.bio = body.bio
        user.image = body.image

        user   
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: user._id,
                    message: 'User Update!',
                })
            })
            .catch( error => {
                return res.status(404).json({
                    error,
                    message: 'User note Updated!'
                })
            })
    })
}

deleteUser = async (req,res) => {
    await User.findOneAndDelete(
        { _id: req.params.id }, (err, user) => {
            if(err){
                return res.status(400)
                    .json({
                        success: false,
                        error: err
                    })
            }

            if(!user){
                return res
                    .status(404)
                    .json({
                        success: false,
                        error: 'User not found'
                    })
            }

            return res
                .status(200)
                .json({
                    success: true,
                    data: user
                })
        }
    ).catch(err => console.log(err))
}

getUserById = async (req,res) => {
    await User.findOne({ _id: req.params.id }, (err, user) => {
        if(err){
            return res.status(400)
                .json({
                    success: false,
                    error: err
                })
        }

        if(!user){
            return res
                .status(404)
                .json({
                    success: false,
                    error: 'User not found'
                })
        }

        return res
            .status(200)
            .json({
                success: true,
                data: user
            })
    }).catch(err => console.log(err))
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUserById
}