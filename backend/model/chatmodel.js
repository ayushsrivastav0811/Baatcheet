const mongoose=require('mongoose')

const chatModel=mongoose.Schema(
    {
        chatName:{type: String,trime:true},
        isGroupChat:{type: Boolean,default:false},
        users: [
            { 
            type:mongoose.Schema.Types.ObjectId,
            ref: "User",
            },
        ],
        lastestMessage:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Message",
        },
        groupAdmin:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        },
    },
    { 
    timestamp: true,
    }
    );

const Chat= mongoose.model("chat",chatModel);

module.exports=Chat;
// chatname
// isgroupchat
// user
// lastestmess
// groupadmin