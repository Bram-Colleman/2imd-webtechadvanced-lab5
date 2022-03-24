const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    username:  String,
    message: String,
    id: String
});

messageSchema.statics.findAll = async function() {
return {
        status: "success",
        message: "GETTING messages",
        data: {
            messages: await this.find({})
        }
    }
};

messageSchema.statics.getById = async function(searchId) {
    return {
        status: "success",
        message: "GETTING message " + searchId,
        data: {
            messages: await this.find({ id: searchId })
        }
    }
  };

messageSchema.statics.getByUser = async function(userName) {
    return {
        status: "success",
        message: "GETTING message for username " + userName,
        data: {
            messages: await this.find({ username: userName })
        }
    }
  };

messageSchema.statics.getSize = async function() {
    const res = await this.findAll();
    return Object.keys(res.data.messages).length;
};

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;