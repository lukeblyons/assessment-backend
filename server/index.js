const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, getGoals, addGoal, updateGoal, deleteGoal } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);

let goals = [];

app.get("/api/goals", (req, res) => {
  res.send(goals);
});

app.post("/api/goals", (req, res) => {
  const goal = req.body.goal;
  goals.push(goal);
  res.send("Goal added successfully");
});

app.put("/api/goals/:id", (req, res) => {
  const id = req.params.id;
  const newGoal = req.body.goal;
  goals[id] = newGoal;
  res.send("Goal updated successfully");
});

app.delete("/api/goals/:id", (req, res) => {
  const id = req.params.id;
  goals.splice(id, 1);
  res.send("Goal deleted successfully");
});

app.put("/api/goals/:id", updateGoal);


app.listen(4000, () => console.log("Server running on 4000"));
