const Message = require('../models/message');

const getAll = async (req, res) => {
    const response = await Message.findAll();
    res.json(response);
}

const getById = async (req, res) => {
  const response = await Message.getById(req.params.id);
  res.json(response);
}

const create = async (req, res) => {
    let username = req.body.username;
    let message = req.body.message;
    let m = new Message();
    m.username = username;
    m.message = message;
    m.id =  await Message.getSize();

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
  const update = async (req, res) => {
    const response = await Message.getById(req.params.id);
    let message = response.data.messages[0];
    console.log(req.body.message);
    message.message = req.body.message;
    await message.save();
    res.json(message);
  }

module.exports.getAll = getAll;
module.exports.create = create;
module.exports.getById = getById;
module.exports.update = update;
