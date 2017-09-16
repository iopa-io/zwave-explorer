import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';
import _ from 'lodash';

@inject('store') @observer class Gallery extends Component {
  render() {

    return (
      <div>
        <h3>Gallery</h3>
        {!_.isEmpty(this.props.store.router.queryParams) && <ul>
          {_.map(this.props.store.router.queryParams, (param, key) => <li key={key}><span>{key}</span> - <b>{param}</b></li>)}
        </ul>
        }
      </div>
    );
  }
}

export default Gallery;
