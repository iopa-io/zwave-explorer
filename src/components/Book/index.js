import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

@inject('store') @observer class Book extends Component {
  render() {
     return (
      <div>
        <h1> Book {this.props.store.router.params.id} </h1>
        <h3> Page: {this.props.store.router.params.page} </h3>
      </div>
    );
  }
}

export default Book;
