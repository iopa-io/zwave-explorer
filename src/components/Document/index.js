import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

//style
@inject('store') @observer class Document extends Component {
  render() {

    return (
      <div>
        <h3> Document </h3>
        <div> with id: {this.props.store.router.params.id} </div>
      </div>
    );
  }
}

export default Document;
