require("dotenv").config();
const express = require("express");
const usersRoutes = require("./routes/users");
const connectDB = require("./utils/db");
const bodyParser = require("body-parser");
const cors = require("cors");

connectDB(); // Connect to MongoDB

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
