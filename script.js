// Declare an arrow function named randomDamage that has no parameters
// and returns a random integer between 1 and 10.

const randomDamage = () => {
  let random = Math.floor(Math.random() * 10);
  return random;
};

// Declare an arrow function named chooseOption that has two parameters named opt1 and opt2.
// Declares and initializes a variable named randNum to either a 0 or 1, randomly.
// Returns opt1 if randNum is equal to 0 otherwise return opt2.
// (Use a ternary operator)
const chooseOption = (opt1, opt2) => {
  let randNum = Math.floor(Math.random() * 2) ? opt1 : opt2;
  return randNum;
};

function attackPlayer(health) {
  return parseInt(health) - randomDamage();
}

const logHealth = (player, health) => {
  console.log(`${player} health: ${health}`);
};

const logDeath = (winner, loser) => {
  console.log(`${winner} defeated ${loser}`);
};

const isDead = (health) => {
  if (health <= 0) {
    return true;
  } else {
    return false;
  }
};

function fight(player1, player2, player1Health, player2Health) {
  while (true) {
    let attacker = chooseOption(player1, player2);
    if (attacker === player1) {
      player2Health = attackPlayer(player2Health);
      logHealth(player2, player2Health);
      if (isDead(player2Health) === true) {
        logDeath(player1, player2);
        break;
      } else {
        player1Health = attackPlayer(player1Health);
        logHealth(player1, player1Health);
        if (isDead(player1Health) === true) {
          logDeath(player2, player1);
          break;
        }
      }
    }
  }
}

fight("Mitch Cuckovich", "Adam Hire", 100, 100);

// Extended Challenges

function getGrade(number) {
  if (number > 90) {
    grade = "A";
    return grade;
  } else if (number > 80 && number <= 90) {
    grade = "B";
    return grade;
  } else if (number > 70 && number <= 80) {
    grade = "C";
    return grade;
  } else if (number > 60 && number <= 70) {
    grade = "D";
    return grade;
  } else if (number > 50 && number <= 60) {
    grade = "F";
    return grade;
  }
}
console.log(getGrade(60));

function prioritize(urgent, important) {
  if (urgent && important) {
    priority = 1;
    return priority;
  } else if (important) {
    priority = 2;
    return priority;
  } else if (urgent) {
    priority = 3;
    return priority;
  } else {
    priority = 4;
    return priority;
  }
}

console.log(prioritize(false, false));
