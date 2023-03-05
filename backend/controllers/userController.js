const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) =>{
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d'})
}

//login user
const loginUser = async (req, res) =>{
    const {email, password} = req.body

    try{
        const user = await User.login(email, password)
        
        const token = createToken(user._id)

        res.status(200).json({email, token})
    }catch (error){
        res.status(400).json({error: error.message})
    }

}


//signup user
const signUpUser = async (req, res) =>{
    const {email, password, department} = req.body

    try{
        const user = await User.signup(email, password, department)

        //create a token

        const token = createToken(user._id)

        res.status(200).json({email, token, department})
    }catch (error){
        res.status(400).json({error: error.message})
    }

}

module.exports = {signUpUser, loginUser}