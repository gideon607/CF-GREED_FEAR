const sentiment = require('sentiment');

exports.calculateSentiment = (googleTrendsData) => {
  const trendsScore = googleTrendsData.default.timelineData.reduce((acc, trend) => acc + trend.value[0], 0) / googleTrendsData.default.timelineData.length;
  return trendsScore; // The sentiment score based on trends data
};
