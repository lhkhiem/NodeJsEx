const index =(req,res)=>{
    return res.status(200).json({
        message: 'User GET Ok!'
    })
}
module.exports={index}