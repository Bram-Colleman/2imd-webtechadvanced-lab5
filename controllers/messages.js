const Message = require('../models/message');

//GET
const getAll = async (req, res) => {
  const response = await Message.findAll();

  // check if there are messages
  if (response.data.messages.length){
    res.json(response);
  } else {
    res.send({
      status: "error",
      error: "No messages found"

    });
  }
}

const getById = async (req, res) => {
  const response = await Message.getById(req.params.id);

  // check if message exists
  if (response.data.messages.length){
    res.json(response);
  } else {
    res.send({
      status: "error",
      error: "no message found with id " + req.params.id

    });
  }
}

//POST
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

//UPDATE
const update = async (req, res) => {
  const response = await Message.getById(req.params.id);  
  // check if message exists
  if(response.data.messages.length) {
    // check if message is empty
    if (req.body.message != ""){
      let m = response.data.messages[0];
      m.message = req.body.message;
      await m.save();
      res.send({
        status: "success",
        message: "UPDATING a message with id " + req.params.id

      });
    } else {
      res.send({
        status: "error",
        error: "please provide a message"

      });
    }
  } else {
    res.send({
      status: "error",
      error: "no message found with id " + req.params.id

    });
  }
}

//DELETE
const remove = async (req, res) => {
  const m = await Message.getById(req.params.id);
  // check if message exists
  if (m.data.messages.length){
    await Message.deleteOne({ id: req.params.id});
    res.send({
      status: "success",
      message: "DELETING message with id " + req.params.id

    });
  } else {
    res.send({
      status: "error",
      error: "no message found with id " + req.params.id

    });
  }
}


module.exports.getAll = getAll;
module.exports.getById = getById;
module.exports.create = create;
module.exports.update = update;
module.exports.remove = remove;
