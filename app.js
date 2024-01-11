//* these are installed modules
const express = require("express");
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

app.listen(3000, () => {
  console.log(`server is running on port ${3000}`);
});
