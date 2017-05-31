import * as React from 'react';
import './App.css';

import { UserDataActions, UserData } from './user-data/actions';

const logo = require('./logo.svg');

export class App extends React.Component<UserDataActions & UserData, undefined> {

  getUsers() {
    if (!this.props.isFetching) {
      this.props.fetchData();
    } 
  }

  cancelGetUsers() {
    if (this.props.isFetching) {
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
          this.props.isFetching && <div>Loading</div>
        }
        {
          // Failed
          this.props.error && <div>Error:{this.props.errorMessage}</div>
        }
        {
          // Have data
          this.props.data.length ? (
            this.props.data.map((person, i) => {
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