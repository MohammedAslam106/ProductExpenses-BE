const jwt=require('jsonwebtoken')

const privateKey="I don't know"

const verifyJwt=(req,res,next)=>{
    const authorization=req.headers.authorization
    if(!authorization){
        return res.status(401).json({message:'please sign in to proceed'})
    }
    const token=authorization.replace('Bearer ',"").trim()
    jwt.verify(token,privateKey,(error,user)=>{
        if(error){
            return res.status(403).json({message:'Fail to authorization'})

        }
        req.user=user
        next()
    })
}

module.exports=verifyJwt