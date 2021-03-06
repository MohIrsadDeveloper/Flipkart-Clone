const mongoose = require('mongoose');
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs");

const { UserModel } = require('../Models/userSchema');
const config = require('./config');

const register = async (req,res) => {
    let hashPassword = bcrypt.hashSync(req.body.password, 8);
    const userdata = {
        name : req.body.name,
        email : req.body.email,
        password : hashPassword,
        phone : req.body.phone,
        role : req.body.role ? req.body.role : "User"
    }
    const userfind = await UserModel.findOne({email : req.body.email})
    if (!userfind) {
        const final = await UserModel.create(userdata)
        .then(data => {
            res.status(200).json("Registered Successfully")
        })
        .catch(err => {
            res.status(500).json("Error While Registration")
        })
    } else {
        res.json("User Already Exist")
    }
}

const login = (req,res) => {
    UserModel.findOne({email : req.body.email}, (err,user) => {
        if (err) {
            res.status(500).json({auth : false, token : "Error"})
        }
        if (!user) {
            res.status(200).json({auth : false, token : "No User Found Register First"})
        }
        else {
            const passIsValid = bcrypt.compareSync(req.body.password, user.password)
            if (!passIsValid) {
                res.status(200).json({auth : "false", token : "Invalid Password"})
            }
            else {
                let token = jwt.sign({id : user._id}, config.secret, {expiresIn : 86400})
                res.status(200).json({
                    auth : true,
                    token : token
                })
            }
        }
    })
}

const userInfo = (req,res) => {
    let token = req.headers["x-access-token"];
    if (!token) {
        res.status(500).json({auth : false, token : "No Token Provided"})
    } else {
        jwt.verify(token, config.secret, (err, result) => {
            if (err) {
                res.status(500).json({auth : false, token : "Invalid Token"})
            }
            else {
                UserModel.findById(user.id, (err, result) => {
                    if (err) throw err;
                    res.status(200).json(result, "Ok")
                })
            }
        })
    }
}

const deleteUsers = (req,res) => {
    UserModel.remove({}, (err,data) => {
        if (err) throw err;
        res.json("User Deleted")
    })
}


module.exports = {
    register,
    login,
    userInfo,
    deleteUsers
}