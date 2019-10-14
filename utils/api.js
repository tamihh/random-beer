import fetch from 'isomorphic-unfetch';

const API_KEY = 'a5c1b917e7ba62dcd79f434ed73bc72d';
const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const API_URL = 'http://api.brewerydb.com/v2/beer/';

export const getRandomBeer = () => `${PROXY_URL}${API_URL}/random/?withBreweries=Y&hasLabels=Y&key=${API_KEY}`;
export const getBeerById = beerId => `${PROXY_URL}${API_URL}${beerId}/?withBreweries=Y&hasLabels=Y&key=${API_KEY}`;
