const express = require("express");
const app = express();
const url =`http://localhost:`
const port = 3000;
const morgan = require("morgan");
const routes = require("./routes/index");

//midlewares
app.use(morgan("dev"));
app.use(express.json());

//routes
app.use(routes);

//server Up
app.listen(port, () => {
  console.log(`server : ${url}${port} online...`);
});
