import api from './api';

// export const fetchEvent = (params) => {
//   return api.callGet('/events/' + params);
// };

export const getToken = (params) => {
  return api.callPost('/v2/oauth2/token', params);
};

export const fetchAnimals = () => {
  return api.callGet('/v2/animals');
};


