const fetch = require('node-fetch'); // For making requests to Telegram API
const express = require('express');
const app = express();

const botToken = '7941483964:AAGpHkggHmCSnRH4TvG6QyxrO0vurgOWhmA'; // আপনার বট টোকেন এখানে দিন
const channelId = '1002161267501'; // আপনার চ্যানেল আইডি এখানে দিন

// Define messages and prefixes
var messages = ["PURPLE 🟣", "RED 🔴", "GREEN 🟢", "BIG", "SMALL"];
var pre = ["05%", "19%", "37%", "30%", "63%", "80%", "47%", "71%", "95%"];

// Function to generate random message and prediction
function getRandomPrediction() {
  let randomMessageIndex = Math.floor(Math.random() * messages.length);
  var randomMessage = messages[randomMessageIndex];

  let randomPreIndex = Math.floor(Math.random() * pre.length);
  var randomPre = pre[randomPreIndex];

  return `*❤️ Hɢᴢʏ Prediction:\n\nWin Go 30 Second::${Math.random() * 100}\n\nPrediction: ${randomMessage}\n\nWin Rate: ${randomPre}\n\n✅ This prediction is based on chart study and Hɢᴢʏ analysis.*`;
}

// Function to send message to Telegram channel
function sendMessage() {
  const message = getRandomPrediction();
  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      chat_id: channelId,
      text: message,
      parse_mode: 'Markdown',
    }),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Message sent:', data);
  })
  .catch(error => {
    console.error('Error sending message:', error);
  });
}

// Set interval to send message every 1 minute (60000 ms)
setInterval(sendMessage, 60000); // 60000 ms = 1 minute

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
