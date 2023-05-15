import { fetchDataFromAPI } from '../Redux/fetchDataFromAPI/fetchDataFromAPI.js';

export const fetchData = () => {
  return dispatch => {
    dispatch(fetchDataFromAPI());
  };
};