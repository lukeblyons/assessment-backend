module.exports = {
    getCompliment: (req, res) => {
      const compliments = [
        "Gee, you're a smart cookie!",
        "Cool shirt!",
        "Your Javascript skills are stellar.",
      ];
  
      // choose random compliment
      let randomIndex = Math.floor(Math.random() * compliments.length);
      let randomCompliment = compliments[randomIndex];
  
      res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
      const fortunes = [
        "You will have a great day today.",
        "Your hard work will pay off soon.",
        "A new opportunity will come your way.",
        "Today is your lucky day.",
        "New friends are coming your way.",
      ];
  
      let randomIndex = Math.floor(Math.random() * fortunes.length);
      let randomFortune = fortunes[randomIndex];
  
      res.status(200).send(randomFortune);
    },
    getGoals: (req, res) => {
      const goals = req.goals;
      res.status(200).send(goals);
    },
    addGoal: (req, res) => {
      const goal = req.body.goal;
      req.goals.push(goal);
      res.status(200).send("Goal added successfully");
    },
    updateGoal: (req, res) => {
      const id = req.params.id;
      const newGoal = req.body.goal;
      req.goals[id] = newGoal;
      res.status(200).send("Goal updated successfully");
    },
    deleteGoal: (req, res) => {
      const id = req.params.id;
      req.goals.splice(id, 1);
      res.status(200).send("Goal deleted successfully");
    },
  };
  