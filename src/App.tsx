import * as React from 'react';
import './App.css';

import * as Redux from 'react-redux';
import { fetchData, cancelFetchUser, UserDataPropType } from './user-data/actions';

const logo = require('./logo.svg');

interface AppProps extends UserDataPropType { }

class App extends React.Component<AppProps, undefined> {

  getUsers() {
    if (!this.props.userData.isFetching) {
      this.props.fetchData();
    } 
  }

  cancelGetUsers() {
    if (this.props.userData.isFetching) {
      this.props.cancelFetch();
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button onClick={() => this.getUsers()}>
          Fetch
        </button>
        <button onClick={() => this.cancelGetUsers()}>
          Cancel Fetch
        </button>
        {
          // Loading
          this.props.userData.isFetching && <div>Loading</div>
        }
        {
          // Failed
          this.props.userData.error && <div>Error:{this.props.userData.errorMessage}</div>
        }
        {
          // Have data
          this.props.userData.data.length ? (
            this.props.userData.data.map((person, i) => {
              return (
                <div key={i} >
                  <p>Name: {person.name}</p>
                  <p>Age: {person.age}</p>
                </div>
              );
            })
          ) : null
        }
      </div>
    );
  }
}

// State to props

const mapStateToProps = (state: any) => ({
  userData: state.userdata
});
const mapDispatchToProps = (dispatch: Redux.Dispatch<{}>): {}  => ({
  fetchData: () => dispatch(fetchData()),
  cancelFetch: () => dispatch(cancelFetchUser())
});

// Export and connect
export default Redux.connect<{}, AppProps, {}>(
  mapStateToProps,
  mapDispatchToProps
)(App);
