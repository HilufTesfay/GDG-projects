import mongoose from mongoose

const userSchema=new mongoose.schema({
    userName :{},
    email:{},
    password:{}
})

const User= mongoose.model("users",userSchema);

export default User;