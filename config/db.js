const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
mongoose
  .connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
