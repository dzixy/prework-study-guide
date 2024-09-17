const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

console.log("Topics covered:");
for (let i = 0; i < topics.length; i++) {
  console.log(topics[i]);
}

// Suggesting a topic to study first
const randomTopic = topics[Math.floor(Math.random() * topics.length)];
console.log(`You should start with studying: ${randomTopic}`);
