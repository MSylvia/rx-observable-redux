import * as React from 'react';
import './App.css';

import * as Redux from 'react-redux'
import { fetchData, cancelFetchUser } from './user-data/actions'

const logo = require('./logo.svg');

interface Person {
  name: string;
  age: number;
}

interface UserData {
  data: Person[];
  dataFetched: boolean;
  isFetching: boolean;
  error: any;
}

interface UserDataPropType {
  userData: UserData
  fetchData: () => void;
  cancelFetch: () => void;
}

class App extends React.Component<UserDataPropType, undefined> {
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
        <button onClick={() => this.props.fetchData()}>
          Fetch
        </button>
        <button onClick={() => this.props.cancelFetch()}>
          Cancel Fetch
        </button>
        {
          this.props.userData.isFetching && <div>Loading</div>
        }
        {
          this.props.userData.data.length ? (
            this.props.userData.data.map((person, i) => {
              return <div key={i} >
                <p>Name: {person.name}</p>
                <p>Age: {person.age}</p>
              </div>
            })
          ) : null
        }
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    userData: state.userdata
  }
}
const mapDispatchToProps = (dispatch: Redux.Dispatch<any>): any  => {
  return {
    fetchData: () => dispatch(fetchData()),
    cancelFetch: () => dispatch(cancelFetchUser())
  }
}

export default Redux.connect<{}, UserDataPropType, {}>(
  mapStateToProps,
  mapDispatchToProps
)(App)
