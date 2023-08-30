import mongoose, {Schema,model} from 'mongoose';
const bookSchema = new Schema ({
    bookName:{
        type:String,
        required:true,
    },
    bookTitle:{
        type:String,
        required:true
    },
    status:{
        type:String,
        default:'available',
        enum:['available','not_available'],
    },
    NumOfPages:{
     type:Number,
     required:true
    },
    price:{
        type:Number,
        required:true
       },
       edition:{
        type:String,
        required:true
       },
    author:{
      type:String
    },
   publishedYear:{
    type:String
   },

},
{
    timestamps:true
})
const bookModel = mongoose.models.Book ||  model('Book', bookSchema);
export default bookModel;


