import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import user from "./Models/User.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

app.get("/api/users", (req, res) => {
  res.send(user);
});

app.get('/api/users/"id', (req, res) => {
  const user = users.find(user.id === parseInt(req, params.id));
  if (!user) {
    return res.status(404);
  }
  res.json(user);
});

app.put("/api/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  user.text = req.body.text;
  res.json(user);
});

app.post("api/users", (req, res) => {
  const newUser = {
    username: req.body.text,
    userage: req.body.text,
    hobby: res.body.text,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.delete("/api/users/:id", (req, res) => {
  users = users.filter((user) => user.id !== parseInt(req.params.id));
  res.status(204).send();
});

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
