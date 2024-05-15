const phraseVariables = {
  names: [
    { name: "Michael", pronoun: "his" },
    { name: "John", pronoun: "his" },
    { name: "Tom", pronoun: "his" },
    { name: "Sam", pronoun: "his" },
    { name: "James", pronoun: "his" },
    { name: "Steve", pronoun: "his" },
    { name: "Hannah", pronoun: "her" },
    { name: "Rachel", pronoun: "her" },
    { name: "Sophie", pronoun: "her" },
    { name: "Jess", pronoun: "her" },
    { name: "Anna", pronoun: "her" },
    { name: "Jane", pronoun: "her" },
    { name: "Angela", pronoun: "her" },
  ],
  actions: [
    "took their first shower in a week",
    "sang into their mother's hairbrush",
    "disco danced",
    "did the Macarena",
    "did the conga",
    "had their first kiss",
    "whispered sweet nothings",
    "contemplated the meaning of life",
    "howled at the moon",
    "did the splits",
    "blew their nose like a trumpet",
  ],
  locations: [
    "in their neighbour's back garden",
    "in the pantry",
    "in their best friend's living room",
    "on their aunti's pristine kitchen counter",
    "at their village fete",
    "at their grandma's old people's home",
    "in the shower",
    "on top of the bar at their best mates pub, The Duck & Bigot",
  ],
};

// Generate a random number to select options from
function generateRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

// Select the phrase variables randomly
function generateRandomPhrase() {
  const namesIndex = generateRandomNumber(phraseVariables.names.length);
  const nameObject = phraseVariables.names[namesIndex];
  const name = nameObject.name;
  const pronoun = nameObject.pronoun;

  const actionsIndex = generateRandomNumber(phraseVariables.actions.length);
  const locationsIndex = generateRandomNumber(phraseVariables.locations.length);

  const action = phraseVariables.actions[actionsIndex];
  const location = phraseVariables.locations[locationsIndex];

  // Format the final phrase using the selected name, action, and location
  return `${name} ${action.replace("their", pronoun)} ${location.replace(
    "their",
    pronoun
  )}!`;
}

// Generate a random phrase when the button is clicked
function generateMessage() {
  const finalPhrase = generateRandomPhrase(); // Generate a new random phrase
  document.getElementById("mixed-message").textContent = finalPhrase;
  const messageBox = document.getElementById("message-box");
  messageBox.style.visibility = "visible";
}
