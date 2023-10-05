require("dotenv").config();

const config = {
  PORT: process.env.PORT ||7600,
  DB: {
    CONNECTION_URL: process.env.DB_CONNECTION_URL,
  },

 
};
module.exports = config;
