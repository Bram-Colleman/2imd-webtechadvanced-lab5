const Message = require('../models/message');

const getAll = async (req, res) => {
    const response = await Message.findAll();
    res.json(response);
}

const create = async (req, res) => {
    let username = req.body.username;
    let message = req.body.message;

    let m = new Message();
    m.username = username;
    m.message = message;

    // check if message is empty
    if (m.message != ""){
      await m.save();
      res.send({
        status: "success",
        message: "Posting API message"

      });
    } else {
      res.send({
        status: "error",
        error: "please provide a message"

      });
    }
  }

module.exports.getAll = getAll;
module.exports.create = create;