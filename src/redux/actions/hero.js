import {
  CLEAR_FILTERED,
  GET_FILTERED,
  GET_HEROES,
} from '../constants/constants';

export const getHeroes = (data) => ({ type: GET_HEROES, payload: data });
export const getFiltered = (data) => ({ type: GET_FILTERED, payload: data });
export const clearFiltered = () => ({ type: CLEAR_FILTERED });

export const getHeroesThunk = (data) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?page=${data}`,
    );
    const res = await response.json();
    dispatch(getHeroes(res));
  } catch (error) {
    console.log(error);
  }
};

export const getFilteredThunk = (data) => async (dispatch) => {
  try {
    const { page, filter } = data;
    const filters = Object.keys(filter).map((el) => {
      if (filter[el]) return `&${el}=${filter[el].toLowerCase()}`;
    });
    const path = `https://rickandmortyapi.com/api/character/?page=${page}${filters.join('')}`;
    const response = await fetch(path);
    if (response.ok) {
      const res = await response.json();
			console.log('res', res)
      dispatch(getFiltered(res));
    }
  } catch (error) {
    console.log(error);
  }
};
