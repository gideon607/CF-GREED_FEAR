// Test/testTwitterService.js
const getTwitterSentiment = require('../src/services/twitterService');

async function test() {
  try {
    const sentiment = await getTwitterSentiment();
    console.log('Twitter Sentiment:', sentiment);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

test();
