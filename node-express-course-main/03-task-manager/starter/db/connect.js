const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://luksezck:flash@nodeexpressprojects.yvsootq.mongodb.net/?retryWrites=true&w=majority&appName=NodeExpressProjects";

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
