const jwt = require('jsonwebtoken')


const auth = (req,res,next)=>{
    try{
        const token =req.header("Authorization")
        if(!token)return res.status(400).json({msg:"invalid authentication"})

        jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
            if(err)return res.status(400).json({msg:"invalid authentication"})

            req.user=user

            next()
        })
    }
    catch(err){
        res.status(500).json({msg:"Invalid token"})
    }
}

module.exports=auth