const userModel = require("../models/user.model")
const tokenModel = require("../models/logout.model")
const jwt = require("jsonwebtoken")

async function authUser(req,res,next)
{
    const token = req.cookies.token
      if (!token)
    {
        return res.status(401).json({
            message:"Token Not provided"
        })
    }

    const tokenBlackListed = await tokenModel.findOne({token})

     if (tokenBlackListed)
    {
        return res.status(401).json({
            message:"Invalid Token"
        })
    }
    try 
    {
        const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET
        ) 
        req.user = decoded
        next()
        
    }catch(err)
    {
        return res.status(401).json({
            message:"Invalid Token"
        })
    }


}

module.exports = authUser