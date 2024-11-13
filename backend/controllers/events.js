const Events = [];

const addEvents = (req, res) => {
  const { title, description, startDate, endDate, location } = req.body;
  const obj = {
    id: Date.now(),
    title: title,
    start: startDate,
    end: endDate,
    description: description,
    location: location,
  };
  Events.push(obj);
  res.status(201).send({ message: "Event added successfully", event: obj });
};

const getEvents = (req, res) => {
  res.send(JSON.stringify(Events));
};

const getSpecificEvents = (req, res) => {
  const date = req.params.date;
  const events = Events.filter((event) => {
    const startDate = new Date(event.start);
    const endDate = new Date(event.end);
    return startDate <= date && date <= endDate;
  });
  res.send(events);
};

const deleteEvent = (req, res) => {
  const id = parseInt(req.params.id);
  const index = Events.findIndex((event) => event.id === id);

  if (index !== -1) {
    Events.splice(index, 1);
    res.send({ message: "Event deleted successfully" });
  } else {
    res.status(404).send({ message: "Event not found" });
  }
};

module.exports = { addEvents, getEvents, getSpecificEvents, deleteEvent };
