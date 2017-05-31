import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE, FETCH_USER_CANCELLED } from './constants'

export interface Action {
  type: string;
  data?: any;
  errorMessage?: any;
}

interface Person {
  name: string;
  age: number;
}

export interface UserData {
  data: Person[];
  dataFetched: boolean;
  isFetching: boolean;
  error: any;
  errorMessage?: string;
}

export interface UserDataPropType {
  userData: UserData
  fetchData: () => void;
  cancelFetch: () => void;
}

export const fetchData = (): Action => ({
  type: FETCHING_DATA
});

export const cancelFetchUser = (): Action => ({
  type: FETCH_USER_CANCELLED
});

export const getDataSuccess = (data: any): Action => ({
  type: FETCHING_DATA_SUCCESS,
  data
});

export const getDataFailure = (error: any): Action => ({
  type: FETCHING_DATA_FAILURE,
  errorMessage: error
});

