import React, { useEffect, useState } from 'react';
import axios from 'axios';

function FearGreedIndex() {
  const [fearGreedIndex, setFearGreedIndex] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFearGreedIndex = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/fear-greed`);
        setFearGreedIndex(response.data.fearGreedIndex);
      } catch (err) {
        setError('Error fetching fear and greed index');
      }
    };

    fetchFearGreedIndex();
  }, []);

  return (
    <div className="fear-greed-index">
      <h1>Fear and Greed Index</h1>
      {error ? (
        <p>{error}</p>
      ) : fearGreedIndex !== null ? (
        <p>The current Fear and Greed Index is: {fearGreedIndex}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default FearGreedIndex;
