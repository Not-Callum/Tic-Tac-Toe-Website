let playerTurn = true;
let buttons = ["button-1", "button-2", "button-3", "button-4", "button-5", "button-6", "button-7", "button-8", "button-9"]

let roundWon = false;

let checkWinCondition;
let lastCheckedWinCondition;

const winConditions = [["button-1", "button-2", "button-3"],
  ["button-4", "button-5", "button-6"],
  ["button-7", "button-8", "button-9"],
  ["button-1", "button-4", "button-7"],
  ["button-2", "button-5", "button-8"],
  ["button-3", "button-6", "button-9"],
  ["button-1", "button-5", "button-9"],
  ["button-3", "button-5", "button-7"]];

resetColour();

function colourChange(id){
  if (document.getElementById(id).textContent != ""){
    return;
  }
  if (roundWon == true){
    return;
  }
  if (playerTurn){
    document.getElementById(id).style.backgroundColor = "#4f4cff";
    document.getElementById(id).textContent = "x";
    playerTurn = false;
  }
  else{
    document.getElementById(id).style.backgroundColor = "#fd8f8f";
    document.getElementById(id).textContent = "o"
    playerTurn = true;
  }
  checkWinConditions()
}

function resetColour(){
  for (let index = 0; index < buttons.length; index++) {
    document.getElementById(buttons[index]).style.backgroundColor = "#575757";
    document.getElementById(buttons[index]).textContent = "";
  }
  roundWon = false;
}

function checkWinConditions(){
  
  winConditions.forEach((element) => {
    const checkA = document.getElementById(element[0]).textContent;
    const checkB = document.getElementById(element[1]).textContent;
    const checkC = document.getElementById(element[2]).textContent;

    if (checkA === "" || checkB === "" || checkC === ""){
      return;
    }

    if (checkA === checkB && checkB === checkC){
      roundWon = true;
      console.log("you won")
      document.getElementById(element[0]).style.backgroundColor = "#008000";
      document.getElementById(element[1]).style.backgroundColor = "#008000";
      document.getElementById(element[2]).style.backgroundColor = "#008000";
    }
  })
}