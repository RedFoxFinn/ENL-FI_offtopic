if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const MONGODB_URI = () => {
  return process.env.MONGODB_URI;
};

const PORT = process.env.PORT || 4015;
const SECRET = process.env.SECRET;

module.exports = {
  mongo: MONGODB_URI(), port: PORT, secret: SECRET, env: process.env.NODE_ENV
};
