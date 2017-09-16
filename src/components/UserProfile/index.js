import React, {Component} from 'react';
import _ from 'lodash';
import {inject, observer} from 'mobx-react';
import views from '~/router/views';

@inject('store') @observer class UserProfile extends Component {
  render() {

    const {params, goTo} = this.props.store.router;

    const tabs = [
      {
        name: 'Articles',
        id: 'articles',
      },
      {
        name: 'Following',
        id: 'following'
      },
      {
        name: 'Followers',
        id: 'followers'
      }
    ];

    return (
      <div>

        <h1> User profile for: {params.username} </h1>

        <h3> Friends: </h3>
        <ul>
          <li>
            <button onClick={() => goTo(views.userProfile, {...params, username: 'kristijan'}, this.props.store)}>
              Kristijan Ristovski
            </button>
          </li>
          <li>
            <button onClick={() => goTo(views.userProfile, {...params, username: 'john'}, this.props.store)}>
              John Doe
            </button>
          </li>
        </ul>

        <h3>Tabs:</h3>

        {_.map(tabs, (tab, key) => <button
            key={key}
            style={{...params.tab === tab.id && {backgroundColor: 'blue', color: 'white'}}}
            onClick={() => goTo(views.userProfile, {...params, tab: tab.id}, this.props.store)}>
            {tab.name}
          </button>
        )}

        {params.tab === 'articles' && <div>
          <ul>
            <li>Article 1</li>
            <li>Article 2</li>
            <li>Article 3</li>
          </ul>
        </div>
        }

        {params.tab === 'following' && <div>
          <ul>
            <li>John Doe</li>
            <li>John Snow</li>
            <li>John Oliver</li>
          </ul>
        </div>
        }

        {params.tab === 'followers' && <div>
          <ul>
            <li>This guy</li>
            <li>That guy</li>
            <li>That other guy</li>
          </ul>
        </div>
        }

      </div>
    );
  }
}

export default UserProfile;
