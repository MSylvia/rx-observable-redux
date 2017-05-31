import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, FETCH_USER_CANCELLED } from './constants'

export const fetchData = () => ({
  type: FETCHING_DATA
});

export const cancelFetchUser = () => ({
  type: FETCH_USER_CANCELLED
});

export const getDataSuccess = (data: any) => ({
  type: FETCHING_DATA_SUCCESS,
  data
});

export const getDataFailure = (error: any) => ({
  type: FETCHING_DATA_FAILURE,
  errorMessage: error
});

