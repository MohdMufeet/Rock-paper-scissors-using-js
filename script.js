userScore = 0;
comScore = 0;

let choises = document.querySelectorAll(".choise");
let user = document.querySelector(".userScore");
let computer = document.querySelector(".comScore");
let display = document.querySelector(".btn");
let displayNew = document.querySelector(".btn1");
let resetBtn = document.querySelector(".reset");


choises.forEach((choise) => {
  choise.addEventListener("click", () => {
    let name = choise.getAttribute("id");
    playgame(name);
  });
});

function comTurn() {
  let arr = ["rock", "paper", "scissors"];

  let idx = Math.floor(Math.random() * 3);

  return arr[idx];
}

function playgame(name) {
  let data = comTurn();
  console.log("com", data);
  if (data == name) {
    // alert("draw");
    showMsg(`draw! user "${data}" computer "${data}"`);
    display.style.backgroundColor = "blue";
  } else {
    if (name == "rock") {
      switch (data) {
        case "scissors":
          userScore++;
          updateScore();
          showMsg(`user win! user "${name}" computer "${data}"`);
          display.style.backgroundColor = "green";
          break;
        case "paper":
          comScore++;
          updateScore();
          showMsg(`computer win! computer "${data}" user "${name}"`);
          display.style.backgroundColor = "red";
          break;
      }
    }
    if (name == "scissors") {
      switch (data) {
        case "rock":
          comScore++;
          updateScore();
          showMsg(`computer win! computer "${data}" user "${name}"`);
          display.style.backgroundColor = "red";
          break;
        case "paper":
          userScore++;
          updateScore();
          showMsg(`user win! user "${name}" computer "${data}"`);
          display.style.backgroundColor = "green";
          break;
      }
    }
    if (name == "paper") {
      switch (data) {
        case "scissors":
          comScore++;
          updateScore();
          showMsg(`computer win! computer "${data}" user "${name}"`);
          display.style.backgroundColor = "red";
          break;
        case "rock":
          userScore++;
          updateScore();
          showMsg(`user win! user "${name}" computer "${data}"`);
          display.style.backgroundColor = "green";
          break;
      }
    }
  }
}

function updateScore() {
  user.innerText = userScore;
  computer.innerText = comScore;
  if(userScore || comScore == 10){
    if(userScore == 10){
       showMsgNew(`user win! Congratulations"`);
      displayNew.style.backgroundColor = "green";
      setTimeout(()=>{reset()},3000);
    }if(comScore == 10){
      showMsgNew(`computer win! you lose"`);
      displayNew.style.backgroundColor = "red";
      setTimeout(()=>{reset()},3000);
    }
    
  }
}

function showMsg(msg) {
  display.innerText = msg;
}

function showMsgNew(msg) {
  displayNew.innerText = msg;
}

function reset(){
  userScore = 0;
  comScore = 0;
  updateScore();
  displayNew.innerText = '';
  display.innerText = "Play";
  displayNew.style.backgroundColor = "black";
  display.style.backgroundColor = "black";
}

resetBtn.addEventListener("click",reset);
