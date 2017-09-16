import React, { Component, PropTypes as T } from 'react'
import { Nav, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav'
import { inject, observer } from 'mobx-react';
import views from '~/router/views';

@inject("store") @observer class SidebarMenu extends Component {

  constructor(props) {
    super(props)

    this.groups = [{
      links: [{
        name: 'Home',
        icon: 'Home',
        url: views.home.path,
        onClick: (e) => { e.preventDefault(); this.props.store.router.goTo(views.home) },
      }, {
        name: 'Gallery',
        url: views.gallery.path,
        icon: 'Edit',
        onClick: (e) => { e.preventDefault(); this.props.store.router.goTo(views.gallery) },
      }]
    }];
  }

  render() {
    return (
      <div className='SidebarMenu'>
        <Nav groups={this.groups}
        />
      </div>
    )
  }
}

export default SidebarMenu;
