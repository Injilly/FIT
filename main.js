/* MOTIVATION */

const motivations = [
"Push yourself because no one else will do it for you.",
"Consistency builds results.",
"Your body can stand almost anything.",
"Stay strong and never quit.",
"Small progress is still progress."
];

function motivation(){

let text=document.getElementById("motivationText");

if(text){

text.innerText =
motivations[Math.floor(Math.random()*motivations.length)];

}

}

/* BMI CALCULATOR */

function calculateBMI(){

let weight=document.getElementById("weight").value;
let height=document.getElementById("height").value/100;

let bmi=weight/(height*height);

document.getElementById("bmiResult").innerText =
"Your BMI: "+bmi.toFixed(2);

}

/* WORKOUT CALENDAR */

function addWorkout(){

let date=document.getElementById("workoutDate").value;
let type=document.getElementById("workoutType").value;

let list=document.getElementById("calendarList");

let li=document.createElement("li");

li.textContent=date+" - "+type;

list.appendChild(li);

}

/* WORKOUT SUGGESTION */

const suggestions=[
"Push Ups 3x15",
"Squats 3x20",
"Plank 3x30 seconds",
"Jump Rope 5 minutes",
"Burpees 3x10"
];

function generateWorkout(){

document.getElementById("suggestWorkout").innerText=
suggestions[Math.floor(Math.random()*suggestions.length)];

}

/* 100 WORKOUTS */

const workoutList=document.getElementById("workoutList");

if(workoutList){

for(let i=1;i<=100;i++){

let li=document.createElement("li");

li.textContent="Workout "+i+" - 3 sets x 12 reps";

workoutList.appendChild(li);

}

}

/* CHATBOT */

function sendMessage(){

let input=document.getElementById("userInput");
let chat=document.getElementById("chat");

let user=input.value;

if(user==="") return;

chat.innerHTML+="<p><b>You:</b> "+user+"</p>";

let reply="Keep training and stay consistent!";

chat.innerHTML+="<p><b>CoachBot:</b> "+reply+"</p>";

input.value="";

}
