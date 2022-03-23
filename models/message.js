const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    username:  String,
    message: String
});

messageSchema.statics.findAll = async function() {
return {
        status: "success",
        data: {
            messages: await this.find({})
        }
    }
};

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;