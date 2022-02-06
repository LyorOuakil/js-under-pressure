import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetchData = (path) => {
  const [error, setError] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(async () => {
    try {
      const response = await axios.get(path);
      setData(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, []);

  return { error, data, loading };
};
