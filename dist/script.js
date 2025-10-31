// attaching the event listener to the form
document.getElementById('lineUpForm').addEventListener('submit', myLineUp);

function myLineUp(event) 
{
event.preventDefault(); // to stop form from reloading allows us to
//display results without reloading the page:)

// where we get the status
const statusEl = document.querySelector('input[name="status"]:checked');
const status = statusEl ? statusEl.value : "None";

// get the game date
const gameDate = document.getElementById('gameDate').value;

// get the checked players
let checkboxes = document.getElementsByName("players");
let checkedPlayers = [];

for (let i = 0; i < checkboxes.length; i++) //simple loop to see which boxes are checked 
{
  if (checkboxes[i].checked) 
    {
    checkedPlayers.push(checkboxes[i].value);
    }
}


// log all data to console
console.log("Status:", status);
console.log("Game Date:", gameDate);
console.log("Players:", checkedPlayers);

// then build the output string
const playersStr = checkedPlayers.length ? checkedPlayers.join(", ") : "None selected";//saying if there are checked players, join then with a comma, otherwise output none selected
const outputString = `Status: ${status} | Date: ${gameDate} | Players: ${playersStr}`; // actual output sting that is displayed

//then display the result on page
const outputDiv = document.getElementById('output');
outputDiv.textContent = outputString;// .textcontent was something new I learned, this allows you to output in plaintext

//and print concatenated result to console
console.log("Concatenated Output:", outputString);
}
