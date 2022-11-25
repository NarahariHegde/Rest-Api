const express = require("express");
const app = express();
require("./src/db/conn");
require("dotenv").config();
const mansrank = require("./src/models/actors");
const port = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  res.send("some of the celebrities..");
});
app.use(express.json());

//to create
app.post("/act", async (req, res) => {
  try {
    const adddata = new mansrank(req.body);
    console.log(req.body);
    const insertdata = await adddata.save();

    res.status(201).send(insertdata);
  } catch (e) {
    res.status(400).send(e);
  }
});

//to get all data
app.get("/act", async (req, res) => {
  try {
    const getdata = await mansrank.find({}).sort({"ranking":1});

    res.send(getdata);
  } catch (e) {
    res.status(400).send(e);
  }
});

//to fetch single data

app.get("/act/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getsdata = await mansrank.findById({ _id });

    res.send(getsdata);
  } catch (e) {
    res.status(400).send(e);
  }
});

//to update the data
app.put("/act/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getudata = await mansrank.findByIdAndUpdate(_id, req.body);

    res.send(getudata);
  } catch (e) {
    res.status(500).send(e);
  }
});

//to delete
app.delete("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getddata = await mansrank.findByIdAndDelete(_id);

    res.send(getddata);
  } catch (e) {
    res.status(501).send(e);
  }
});

app.listen(port, () => {
  console.log(`server running at :${port}`);
});
