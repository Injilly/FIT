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
}

// ================= WORKOUT SUGGESTION BY BODY PART =================

const workoutData = {
  chest: [
    "Push Ups - 3 sets x 15 reps",
    "Bench Press - 4 sets x 10 reps",
    "Incline Dumbbell Press - 3 sets x 12 reps",
    "Chest Fly - 3 sets x 12 reps"
  ],
  arms: [
    "Bicep Curls - 3 sets x 12 reps",
    "Tricep Dips - 3 sets x 10 reps",
    "Hammer Curls - 3 sets x 12 reps",
    "Close Grip Push Ups - 3 sets x 12 reps"
  ],
  legs: [
    "Squats - 4 sets x 12 reps",
    "Lunges - 3 sets x 10 reps",
    "Leg Press - 3 sets x 12 reps",
    "Calf Raises - 4 sets x 15 reps"
  ],
  abs: [
    "Crunches - 3 sets x 20 reps",
    "Plank - 3 sets x 40 seconds",
    "Leg Raises - 3 sets x 15 reps",
    "Russian Twists - 3 sets x 20 reps"
  ],
  shoulders: [
    "Shoulder Press - 3 sets x 12 reps",
    "Lateral Raises - 3 sets x 12 reps",
    "Front Raises - 3 sets x 12 reps",
    "Arnold Press - 3 sets x 10 reps"
  ],
  back: [
    "Pull Ups - 3 sets x 8 reps",
    "Deadlifts - 4 sets x 6 reps",
    "Lat Pulldown - 3 sets x 12 reps",
    "Seated Row - 3 sets x 12 reps"
  ],
  full: [
    "Burpees - 3 sets x 10 reps",
    "Jump Squats - 3 sets x 12 reps",
    "Mountain Climbers - 3 sets x 30 sec",
    "Push Ups - 3 sets x 15 reps"
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

  // Simple responses (can be expanded)
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

// ================= CHART.JS EXAMPLE (Optional) =================
// Only works if you included <canvas id="progressChart"></canvas> in your HTML
if (document.getElementById("progressChart")) {
  const ctx = document.getElementById("progressChart").getContext("2d");
  const progressChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      datasets: [{
        label: "Workout Progress",
        data: [1, 2, 3, 4],
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
        y: { ticks: { color: "white" } }
      }
    }
  });
}
