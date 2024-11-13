const express = require("express");
const Router = express.Router();
const {
  addEvents,
  getEvents,
  getSpecificEvents,
  deleteEvent,
} = require("../controllers/events");

Router.get("/", getEvents)
  .post("/", addEvents)
  .get("/:date", getSpecificEvents)
  .delete("/:id", deleteEvent);

module.exports = Router;
