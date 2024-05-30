const { getGoogleTrendsSentiment } = require('/root/CF-GREED_FEAR/backend');

async function testSentimentFunctions() {
  try {
    const googleTrendsSentiment = await getGoogleTrendsSentiment();
    console.log('Verified Google Trends Sentiment:', googleTrendsSentiment);
  } catch (error) {
    console.error('Error during test:', error.message);
  }
}

testSentimentFunctions();
