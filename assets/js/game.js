var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this
console.log(playerName,playerAttack,playerHealth);

var enemyName= "Roberto";
var enemyHealth=50;
var enemyAttack=12;

var fight = function() {
// Alert players that they are starting the round
window.alert("Welcome to Robot Gladiators!");
var promptFight = window.prompt("Fight or skip this battle? Enter 'FIGHT' or 'SKIP' to choose.")

//
if (promptFight == "fight"||promptFight=="FIGHT"){
  enemyHealth= enemyHealth - playerAttack;
  console.log(
    playerName + " attacked "+ enemyName + ". "+enemyName+" now has " + enemyHealth
  )
 
  // check enemy's health
if (enemyHealth <= 0) {
  window.alert(enemyName + " has died!");
} else {
  window.alert(enemyName + " still has " + enemyHealth + " health left.");
}

// remove player's health by subtracting the amount set in the enemyAttack variable
playerHealth = playerHealth - enemyAttack;
console.log(
  enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
);

// check player's health
if (playerHealth <= 0) {
  window.alert(playerName + " has died!");
} else {
  window.alert(playerName + " still has " + playerHealth + " health left.");
}
}
// if player choses to skip
else if (promptFight === "skip" || promptFight === "SKIP") {
var confirmSkip = window.confirm('Are you sure youd like to quit?');
if(confirmSkip){
  window.alert(playerName + " Has decide to skip this fight. goodbye");
  playerMoney=playerMoney-2;
}else{
  fight();
}
window.alert(playerName + " has chosen to skip the fight!");
} else {
window.alert("You need to choose a valid option. Try again!");


};
};
fight();
