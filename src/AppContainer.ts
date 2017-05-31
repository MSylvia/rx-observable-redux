import { connect, Dispatch } from 'react-redux';
import { UserDataActions, Action } from './user-data/actions';
import { App } from './App';

const mapStateToProps = (state: any) => ({
  ...state.userdata
});
const mapDispatchToProps = (dispatch: Dispatch<Action>): UserDataActions => ({
  fetchData: () => dispatch({type: 'FETCHING_DATA'}),
  cancelFetch: () => dispatch({type: 'FETCH_USER_CANCELLED'})
});

// Export and connect
export default connect<{}, UserDataActions, {}>(
  mapStateToProps,
  mapDispatchToProps
)(App);
