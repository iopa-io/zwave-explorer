import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Login from './components/Login';
import Root from './components/Root';

@inject("store") @observer
class App extends Component {
  componentDidMount() {
    this.props.store.auth.refLogin();
  }

  render() {
    return (
      <div>
        { this.props.store.auth.isLoggedin ? <Root  /> : <Login  /> }
      </div>
    )
  }
};

export default App;