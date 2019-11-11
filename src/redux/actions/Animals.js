import {FETCH_ANIMALS_SUCCESS, FETCH_ANIMALS} from './types/Animals'
import axios from 'axios';

axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

export const fetchAnimalsSuccess = response => ({
  type: FETCH_ANIMALS_SUCCESS,
  response
});

export const fetchAnimals = params => ({
  type: FETCH_ANIMALS,
  params
});