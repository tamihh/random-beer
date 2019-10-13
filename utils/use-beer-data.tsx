import { useFetch } from '../utils/use-fetch';
import { getBeerById, getRandomBeer } from './api';

export const useBeerData = (id: string) => {
  const URL = getBeerById(id);
  const { response, isLoading, error } = useFetch(URL);

  return { beerDetails: response, isLoading, error };
};

export const useRandomBeerData = () => {
  const URL = getRandomBeer();
  const { response, isLoading, error } = useFetch(URL);

  return { randomBeerDetails: response, isLoading, error };
};
