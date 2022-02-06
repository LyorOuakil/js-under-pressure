import { useEffect, useState } from 'react';
import axios from 'axios';

export const useFetchData = (path) => {
  const [error, setError] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    try {
      setLoading(true);
      const response = await axios.get(path);
      setData(response.data);
    } catch (err) {
      setError(err);
      // eslint-disable-next-line no-debugger
    } finally {
      setLoading(false);
    }
  }, []);

  return { error, data, loading };
};
