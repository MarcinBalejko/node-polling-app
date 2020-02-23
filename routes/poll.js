const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config();

const Pusher = require('pusher');

var pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_KEY,
  secret: process.env.PUSHER_SECRET,
  cluster: 'eu',
  encrypted: true
});

router.get('/', (req, res) => {
  res.send('POLL');
});

router.post('/', (req, res) => {
  pusher.trigger('os-poll', 'os-vote', {
    points: 1,
    os: req.body.os
  });

  return res.json({ success: true, message: 'Thank you for voting' });
});

module.exports = router;
