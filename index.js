const express = require('express');
const messagesRouter = require('./routers/messages');
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/');
mongoose.connect('mongodb+srv://BramColleman:admin@lab5.rnlkz.mongodb.net/messages?retryWrites=true&w=majority');

const app = express();
const port = 3000;
app.set('view engine', 'pug');

app.use(express.json());
app.use("/api/v1/messages", messagesRouter);

//REST
app.get('/', (req, res) => {
    res.render('index', {title: "Message app", message: "Lab 5"});
  });
  
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });