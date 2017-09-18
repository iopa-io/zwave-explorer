import React, { Component } from 'react'
import {
  Breadcrumb, IBreadcrumbItem
} from 'office-ui-fabric-react/lib/Breadcrumb';
import { inject, observer } from 'mobx-react';
import './Breadcrumbs.css'

@inject("store") @observer class Breadcrumbs extends Component {

  render() {

    if (this.props.store.app.properties.breadcrumbs.length == 0)
      return null;

    return (
      <div>
        <Breadcrumb className="Breadcrumbs" items={this.props.store.app.properties.breadcrumbs} />
      </div>
    )
  }
}

export default Breadcrumbs
