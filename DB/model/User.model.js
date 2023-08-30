import mongoose, {Schema,model} from 'mongoose';
const userSchema = new Schema ({
    userName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    confirmEmail:{
        type:Boolean,
        default:false,
    },
    phone:String,
    role:{type:String,
    enum:['User','Admin','SuperAdmin'],
    default:'User'
    },
    status:{
        type:String,
        default:'Active',
        enum:['Active','Not_Active']
    },
    gender:{
        type:String,
        enum:['Male','Female']

    },
    address:{
        type:String
    },
    profilePic:{
        type:String,
    },
    coverPic:[String],
    forgetCode:{
        type:String,
        default:null
    },
    changePasswordTime:{
        type:Date
    },
},

{
    timestamps:true
})
const userModel = mongoose.models.User ||  model('User', userSchema);
export default userModel;


