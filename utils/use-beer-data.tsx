import { useFetch } from '../utils/use-fetch';
import { getBeerById, getRandomBeer } from './api';

export const useBeerData = (id: string, options?: object, shouldFetch?: boolean, setShouldFetch?: any) => {
  const URL = getBeerById(id);
  const { response, isLoading, error } = useFetch(URL, options, shouldFetch, setShouldFetch);

  return { beerDetails: response, isLoading, error };
};

export const useRandomBeerData = (options?: object, shouldFetch?: boolean, setShouldFetch?: any) => {
  const URL = getRandomBeer();
  const { response, isLoading, error } = useFetch(URL, options, shouldFetch, setShouldFetch);

  return { randomBeerDetails: response, isLoading, error };
};
