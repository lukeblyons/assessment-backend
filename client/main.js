const complimentBtn = document.getElementById("complimentButton");

const getCompliment = () => {
  axios.get("http://localhost:4000/api/compliment/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const fortuneBtn = document.getElementById("fortuneButton");

const getFortune = () => {
  axios.get("http://localhost:4000/api/fortune/").then((res) => {
    const data = res.data;
    alert(data);
  });
};

const goalForm = document.getElementById("goalForm");
const goalList = document.getElementById("goalList");

const renderGoals = (goals) => {
    goalList.innerHTML = "";
    goals.forEach((goal, index) => {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
        <span>${goal}</span>
        <button onclick="deleteGoal(${index})">Delete</button>
        <button onclick="updateGoal(${index})">Update</button>
      `;
      goalList.appendChild(listItem);
    });
  };
  

const getGoals = () => {
  axios.get("http://localhost:4000/api/goals/").then((res) => {
    const goals = res.data;
    renderGoals(goals);
  });
};

const addGoal = (event) => {
    event.preventDefault();
    const goal = document.getElementById("goalInput").value;
    axios.post("http://localhost:4000/api/goals/", { goal })
      .then(() => {
        getGoals();
        document.getElementById("goalInput").value = "";
      })
      .catch((err) => console.error(err));
  };
  

const deleteGoal = (id) => {
  axios.delete(`http://localhost:4000/api/goals/${id}`).then((res) => {
    getGoals();
  });
};

const updateGoal = (index) => {
    const newGoal = prompt("Enter the new goal");
    axios.put(`http://localhost:4000/api/goals/${index}`, { goal: newGoal })
      .then(() => getGoals())
      .catch((err) => console.error(err));
  };
  

goalForm.addEventListener("submit", addGoal);
fortuneBtn.addEventListener("click", getFortune);
complimentBtn.addEventListener("click", getCompliment);
getGoals();
