import { FETCHING_DATA, FETCH_USER_CANCELLED } from './constants'
import { getDataSuccess, getDataFailure, Action } from './actions'
import getPeople from './api'

import { Observable } from 'rxjs'

const fetchUserEpic = (action$: any) =>
  action$.ofType(FETCHING_DATA)
    .mergeMap((action: Action) =>
      Observable.fromPromise(getPeople())
        .map(response => getDataSuccess(response))
        .takeUntil(action$.ofType(FETCH_USER_CANCELLED))
        .catch(error => Observable.of(getDataFailure(error)))
      );

export default fetchUserEpic