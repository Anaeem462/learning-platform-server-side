const express = require("express");
const cors = require("cors");
const app = express();
const Port = process.env.Port || 5000;
app.use(cors());

const category = require("./Data/Category.json");
app.get("/", (req, res) => {
  res.send(category);
});
app.get("/category", (req, res) => {
  res.send(category);
});

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
  res.send(category.find((c) => c.id === id));
});
const courses = require("./Data/courses.json");
app.get("/course", (req, res) => {
  res.send(courses);
});
app.get("/course/:id", (req, res) => {
  const id = req.params.id;
  const coursesById = courses.find((c) => c._id === id);
  console.log(coursesById);
  const coursesByCategoryId = courses.find((c) => c.category_id === id);
  console.log(coursesByCategoryId);
  res.send(coursesById || coursesByCategoryId);
});

app.listen(Port, () => {
  console.log("server is running on: ", Port);
});
