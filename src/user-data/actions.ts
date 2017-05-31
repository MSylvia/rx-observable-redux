import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, FETCH_USER_CANCELLED } from './constants';

export interface Action {
  type: string;
  data?: Person[];
  errorMessage?: string;
}

export interface Person {
  name: string;
  age: number;
}

export interface UserData {
  data: Person[];
  dataFetched: boolean;
  isFetching: boolean;
  error: boolean;
  errorMessage?: string;
}

export interface UserDataActions {
  fetchData: () => void;
  cancelFetch: () => void;
}

export const fetchData = (): Action => ({
  type: FETCHING_DATA
});

export const cancelFetchUser = (): Action => ({
  type: FETCH_USER_CANCELLED
});

export const getDataSuccess = (data: Person[]): Action => ({
  type: FETCHING_DATA_SUCCESS,
  data
});

export const getDataFailure = (error: string): Action => ({
  type: FETCHING_DATA_FAILURE,
  errorMessage: error
});