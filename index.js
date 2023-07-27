// const server = require("./src/server");

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ status: "working " });
});
app.get("/path", (req, res) => {
  res.json({ status: "working /path" });
});

app.post("/", (req, res) => {
  let data = req.body.data;

  if (data === undefined) {
    res.json({ mess: "plese provide data" });
  } else {
    res.json({ mess: data + "------data is comming----------" });
  }
});
// server port
const port = process.env.PORT || 5000;

app.listen(port, () => {
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
//   //   require("./src/configDB/db");
//   // /server start
//   app.listen(port, () => {
//     console.log(`Server is up at ${port} `);
//   });
// }
