const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://luksezck:flash@nodeexpressprojects.yvsootq.mongodb.net/";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("CONNECTED TO THE Db..."))
  .catch((err) => console.log(err));
