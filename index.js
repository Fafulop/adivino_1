// Arrays for message components
const greetings = ['Hello', 'Hey', 'Greetings', 'Hi', 'Yo', 'Salutations', 'Welcome'];
const actions = ['embrace', 'pursue', 'discover', 'ignite', 'unleash', 'conquer', 'nurture'];
const motivations = ['your dreams', 'new opportunities', 'inner strength', 'your potential', 'the future', 'your passion', 'endless possibilities'];

// Function to pick a random element from an array
function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate a random message
function generateMessage() {
  const greeting = getRandomElement(greetings);
  const action = getRandomElement(actions);
  const motivation = getRandomElement(motivations);
  return `${greeting}, ${action} ${motivation}!`;
}

// Output a random message
console.log(generateMessage());

// Output three random messages
for (let i = 0; i < 3; i++) {
  console.log(`Message ${i + 1}: ${generateMessage()}`);
}