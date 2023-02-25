const registerUser = (req,res)=>{
    res.json({message:"User registered"})
}

const loginUser = (req,res)=>{
    res.json({message:"user logged in"})
}
const getMe = (req,res)=>{
    res.json({message:"User registered"})
}
module.exports ={
    registerUser,
    loginUser,
    getMe
}