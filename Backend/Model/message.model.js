import moongose from 'mongoose'
const messageSchema=new moongose.Schema({
  senderId:{
    type:moongose.Schema.Types.ObjectId,
    ref:'User',
    require:true,
  },
  reciverId:{
    type:moongose.Schema.Types.ObjectId,
    ref:'User',
    require:true,
  },
  message:{
    type:String,
    require:true,
  }
},{timestamps:true});
const Message=moongose.model("Message",messageSchema);
export default Message;