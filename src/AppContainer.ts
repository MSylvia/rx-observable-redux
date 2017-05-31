import { connect, Dispatch } from 'react-redux';
import { fetchData, cancelFetchUser, UserDataActions, UserData } from './user-data/actions';
import { App } from './App';

const mapStateToProps = (state: any) => ({
  ...state.userdata
});
const mapDispatchToProps = (dispatch: Dispatch<{}>) => ({
  fetchData: () => dispatch(fetchData()),
  cancelFetch: () => dispatch(cancelFetchUser())
});

// Export and connect
export default connect<{}, UserDataActions & UserData, {}>(
  mapStateToProps,
  mapDispatchToProps
)(App);
