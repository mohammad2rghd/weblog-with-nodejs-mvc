//* these are installed modules
const express = require("express");

//* load config
const dotEnv = require("dotenv");
dotEnv.config({
  path: "./config/config.env",
});

//* these are our modules
const app = express();
const path = require("path");
const indexRoutes = require("./routes");

//* view engine registeration
app.set("view engine", "ejs");
app.set("views", "views");

//* static folders
app.use(express.static(path.join(__dirname, "public")));

//* custom middlewares

//* routes
app.use(indexRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  );
});
