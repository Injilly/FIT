// ================= MOTIVATION =================
const motivations = [
  "Push yourself because no one else will do it for you.",
  "Consistency builds results.",
  "Your body can stand almost anything.",
  "Stay strong and never quit.",
  "Small progress is still progress."
];

function motivation() {
  const text = document.getElementById("motivationText");
  if (text) {
    text.innerText = motivations[Math.floor(Math.random() * motivations.length)];
  }
}

// ================= BMI CALCULATOR =================
function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value / 100;

  if (!weight || !height) {
    document.getElementById("bmiResult").innerText = "Please enter valid weight and height.";
    return;
  }

  const bmi = weight / (height * height);
  document.getElementById("bmiResult").innerText = "Your BMI: " + bmi.toFixed(2);
}

// ================= WORKOUT CALENDAR =================
function addWorkout() {
  const date = document.getElementById("workoutDate").value;
  const type = document.getElementById("workoutType").value;

  if (!date) {
    alert("Please select a date.");
    return;
  }

  const list = document.getElementById("calendarList");
  const li = document.createElement("li");
  li.textContent = date + " - " + type;
  list.appendChild(li);

  // Save progress to localStorage
  let progress = JSON.parse(localStorage.getItem("workoutProgress")) || {};
  progress[date] = type === "Workout" ? 1 : 0;
  localStorage.setItem("workoutProgress", JSON.stringify(progress));

  updateProgressChart();
}

// ================= WORKOUT SUGGESTION BY BODY PART =================
const workoutData = {
  chest: [
    "Push Ups - 3x15",
    "Bench Press - 4x10",
    "Incline Dumbbell Press - 3x12",
    "Chest Fly - 3x12"
  ],
  arms: [
    "Bicep Curls - 3x12",
    "Tricep Dips - 3x10",
    "Hammer Curls - 3x12",
    "Close Grip Push Ups - 3x12"
  ],
  legs: [
    "Squats - 4x12",
    "Lunges - 3x10",
    "Leg Press - 3x12",
    "Calf Raises - 4x15"
  ],
  abs: [
    "Crunches - 3x20",
    "Plank - 3x40s",
    "Leg Raises - 3x15",
    "Russian Twists - 3x20"
  ],
  shoulders: [
    "Shoulder Press - 3x12",
    "Lateral Raises - 3x12",
    "Front Raises - 3x12",
    "Arnold Press - 3x10"
  ],
  back: [
    "Pull Ups - 3x8",
    "Deadlifts - 4x6",
    "Lat Pulldown - 3x12",
    "Seated Row - 3x12"
  ],
  full: [
    "Burpees - 3x10",
    "Jump Squats - 3x12",
    "Mountain Climbers - 3x30s",
    "Push Ups - 3x15"
  ]
};

function generateWorkout() {
  const bodyPart = document.getElementById("bodyPart").value;
  const result = document.getElementById("suggestWorkout");

  if (bodyPart === "") {
    result.innerText = "Please select a body part first.";
    return;
  }

  const workouts = workoutData[bodyPart];
  const randomWorkout = workouts[Math.floor(Math.random() * workouts.length)];
  result.innerText = randomWorkout;
}

// ================= COACHBOT =================
function sendMessage() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chat");

  const user = input.value.trim();
  if (user === "") return;

  chat.innerHTML += "<p><b>You:</b> " + user + "</p>";

  const responses = [
    "Keep training and stay consistent!",
    "Remember to stretch before workouts.",
    "Rest days are just as important as workout days.",
    "Focus on form, not just reps.",
    "Consistency is key for progress."
  ];

  const reply = responses[Math.floor(Math.random() * responses.length)];
  chat.innerHTML += "<p><b>CoachBot:</b> " + reply + "</p>";
  chat.scrollTop = chat.scrollHeight;

  input.value = "";
}

// ================= PROGRESS CHART =================
let progressChart;

function updateProgressChart() {
  const ctx = document.getElementById("progressChart").getContext("2d");

  const progress = JSON.parse(localStorage.getItem("workoutProgress")) || {};

  // Sort dates
  const labels = Object.keys(progress).sort();
  const data = labels.map(date => progress[date]);

  if (progressChart) {
    progressChart.data.labels = labels;
    progressChart.data.datasets[0].data = data;
    progressChart.update();
  } else {
    progressChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [{
          label: "Workout Progress",
          data: data,
          borderColor: "#ff3fa4",
          backgroundColor: "rgba(255,105,180,0.3)",
          fill: true,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { labels: { color: "white" } }
        },
        scales: {
          x: { ticks: { color: "white" } },
          y: { ticks: { color: "white", stepSize: 1 } }
        }
      }
    });
  }
}

// Initialize chart on page load
window.onload = function() {
  updateProgressChart();

  // Load existing calendar into page
  const progress = JSON.parse(localStorage.getItem("workoutProgress")) || {};
  const list = document.getElementById("calendarList");
  if (list) {
    list.innerHTML = "";
    Object.keys(progress).sort().forEach(date => {
      const li = document.createElement("li");
      li.textContent = date + " - " + (progress[date] === 1 ? "Workout" : "Rest");
      list.appendChild(li);
    });
  }
};
