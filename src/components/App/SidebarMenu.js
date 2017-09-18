import React, { Component, PropTypes as T } from 'react'
import { Nav, INavLinkGroup } from 'office-ui-fabric-react/lib/Nav'
import { inject, observer } from 'mobx-react';

@inject("store", "views") @observer class SidebarMenu extends Component {

  constructor(props) {
    super(props)
    const views = props.views;

    this.groups = [{
      links: [{
        name: 'Home',
        icon: 'Home',
        url: views.home.path,
        onClick: (e) => { e.preventDefault(); this.props.store.router.goTo(views.home,null,this.props.store) },
      }, {
        name: 'Gallery',
        url: views.gallery.path,
        icon: 'Edit',
        onClick: (e) => { e.preventDefault(); this.props.store.router.goTo(views.gallery,null,this.props.store) },
      }, {
        name: 'Devices',
        url: views.devices.path,
        icon: 'Edit',
        onClick: (e) => { e.preventDefault(); this.props.store.router.goTo(views.devices, null, this.props.store) },
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
