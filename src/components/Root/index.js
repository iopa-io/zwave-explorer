import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Fabric } from 'office-ui-fabric-react/lib/Fabric'
import NavBar from '../App/NavBar.js'
import Breadcrumbs from '../App/Breadcrumbs.js'
import SidebarMenu from '../App/SidebarMenu.js'
import Footer from '../App/Footer.js'
import { MobxRouter } from 'mobx-router';

@inject("store") @observer
class Root extends Component {

  render() {
    return (
      <Fabric className="App">
        <div className="header">
          <NavBar />
        </div>
        <div className="body">
          <div className="content">
            <Breadcrumbs />
            <MobxRouter />
          </div>
          <div className="sidebar">
            <SidebarMenu />
          </div>
        </div>
        { /*<div className="footer">
          <Footer />
        </div> */}
      </Fabric>
    )
  }
};

export default Root;