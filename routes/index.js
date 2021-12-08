var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi There!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Messageboard', messages: messages });
});

router.get('/new', (req, res, next) => {
  res.render('form', { title: 'New Message' });
});

router.post('/new', (req, res) => {
  const author = req.body.author;
  const messageText = req.body.message;
  messages.push({ text: messageText, user: author, added: new Date() });
  res.redirect('/');
});

module.exports = router;
