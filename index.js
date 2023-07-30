const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(express.json());
app.use(cors());
// server port
const port = process.env.PORT || 5000;
const tokenVarifiction = require("./src/utils/jwtTokenVarification");

app.use("/api/v1/user", require("./src/routes/user"));
app.use("/api/v1/post", tokenVarifiction, require("./src/routes/posts"));
app.use("/api/v1/comment", tokenVarifiction, require("./src/routes/comments"));

app.listen(port, (err) => {
  if (err) console.log("err:", err);
  console.log(`Server is up at ${port} `);
});

//CLUSTER
// const cluster = require("cluster");
// const os = require("os");

// if (cluster.isPrimary) {
//   for (let i = 0; i < os.cpus().length; i++) {
//     cluster.fork();
//   }
//   cluster.on("exit", (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} died`);
//   });
// } else {
//   //connect db
//   // /server start
//   app.listen(port, () => {
//     console.log(`Server is up at ${port} `);
//   });
// }
