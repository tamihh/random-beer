import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';

export const useFetch = (url: string, options?: object, shouldFetch?: boolean, setShouldFetch?: any) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (shouldFetch) {
        setIsLoading(true);
        try {
          const res = await fetch(url, options);
          const json = await res.json();
          setResponse(json.data);
          setIsLoading(false);
          setShouldFetch(false);
        } catch (error) {
          setError(error);
          setShouldFetch(false);
        }
      }
    };
    fetchData();
  }, [shouldFetch]);

  return { response, error, isLoading };
};
