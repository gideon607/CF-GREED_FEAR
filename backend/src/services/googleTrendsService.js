const googleTrends = require('google-trends-api');

exports.fetchTrends = async () => {
  const response = await googleTrends.interestOverTime({
    keyword: ['Bitcoin', 'memecoins', 'xrp'],
    startTime: new Date(Date.now() - (7 * 24 * 60 * 60 * 1000)),
    endTime: new Date(),
  });
  return JSON.parse(response);
};
