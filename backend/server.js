require("dotenv").config();
const express = require("express");
const EventRouter = require("./routes/events");
const cors = require("cors");
const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/events", EventRouter);

app.listen(port, () => {
  console.log("Server is running on port 3000");
});
