import { FETCHING_DATA, FETCH_USER_CANCELLED } from './constants';
import { getDataSuccess, getDataFailure, Action } from './actions';
import getPeople from './api';

import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';

const fetchUserEpic = (action$: ActionsObservable<Action>) =>
  action$.ofType(FETCHING_DATA)
    .mergeMap((action: Action) =>
      Observable.fromPromise(getPeople())
        .map(response => getDataSuccess(response))
        .takeUntil(action$.ofType(FETCH_USER_CANCELLED))
        .catch(error => Observable.of(getDataFailure(error)))
      );

export default fetchUserEpic;