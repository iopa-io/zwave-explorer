import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from 'mobx-router';
import views from '~/router/views';

@inject('store') @observer class Home extends Component {
  render() {
    const goTo = this.props.store.router.goTo;

    return (
      <div>
        <h3> Home </h3>

        <Link view={views.gallery} store={this.props.store}> Go to gallery </Link>

        <br />
        <br />
        <Link view={views.gallery} store={this.props.store} queryParams={{ start: 5 }}>
          Go to gallery and start from 5th image
        </Link>

        <br />
        <br />

        <Link view={views.document} store={this.props.store} params={{ id: 456 }} title="Go to document 456" />

        <br />
        <br />

        <Link view={views.document} store={this.props.store} params={{ id: 999 }} >
          <div style={{ display: 'inline-block' }}>
            Go to document <b> 999 </b>
          </div>
        </Link>

        <br />
        <br />

        <button onClick={() => goTo(views.document, { id: 123 }, this.props.store)}> Go to document 123</button>

        <br />
        <br />

        <Link view={views.book} store={this.props.store} params={{ id: 250, page: 130 }} title="Go to book 250, page 130"  />

        <br />
        <br />

        <button onClick={() => goTo(views.userProfile, { username: 'kitze', tab: 'articles' }, this.props.store)}>
          go to user kitze
        </button>

      </div>
    );
  }
}

export default Home;
