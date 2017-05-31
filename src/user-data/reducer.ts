import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, FETCH_USER_CANCELLED } from './constants';

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
};

export default function dataReducer (state = initialState, action: any) {
  switch (action.type) {
    case FETCHING_DATA:
      return {
        ...state,
        data: [],
        isFetching: true
      };
    case FETCHING_DATA_SUCCESS:
      return {
        ...state,
        isFetching: false,
        dataFetched: true,
        data: action.data
      };
    case FETCHING_DATA_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      };
    case FETCH_USER_CANCELLED:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
}