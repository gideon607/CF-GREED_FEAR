const googleTrendsService = require('../services/googleTrendsService');
const sentimentAnalysis = require('../utils/sentimentAnalysis');

exports.getFearGreedIndex = async (req, res) => {
  try {
    const googleTrendsData = await googleTrendsService.fetchTrends();
    const sentimentScore = sentimentAnalysis.calculateSentiment(googleTrendsData);
    res.json({ fearGreedIndex: sentimentScore });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch Fear and Greed Index' });
  }
};
