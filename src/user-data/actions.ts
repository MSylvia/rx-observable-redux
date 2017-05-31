import getPeople from './api';

import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';

export interface Action {
  type: 'FETCHING_DATA'|'FETCHING_DATA_SUCCESS'|'FETCHING_DATA_FAILURE'|'FETCH_USER_CANCELLED';
  errorMessage?: string;
  data?: Person[];
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

export const getDataSuccess = (data: Person[]): Action => ({
  type: 'FETCHING_DATA_SUCCESS',
  data
});

export const getDataFailure = (error: string): Action => ({
  type: 'FETCHING_DATA_FAILURE',
  errorMessage: error
});

export const fetchUserEpic = (action$: ActionsObservable<Action>) =>
  action$.ofType('FETCHING_DATA')
    .mergeMap((action: Action) =>
      Observable.fromPromise(getPeople())
        .map(response => getDataSuccess(response))
        .takeUntil(action$.ofType('FETCH_USER_CANCELLED'))
        .catch(error => Observable.of(getDataFailure(error)))
      );