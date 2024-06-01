const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/accounts";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const connectDb = () => {
  mongoose
    .connect(uri)
    .then((e) => {
      console.log("Connected to Database");
    })
    .catch((err) => {
      console.log(err);
    });

  mongoose.connection.on("error", (err) => {
    console.log("Error logged from db.js module in the config folder  ")
    console.error(err);
  });
};

module.exports = connectDb;
