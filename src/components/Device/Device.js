import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

@inject('store', 'views') @observer class Device extends Component {

    render() {
        var id = this.props.store.router.params.id;
        var device = this.props.store.device.getById(id);
        const store = this.props.store;
        store.app.properties.breadcrumbs[store.app.properties.breadcrumbs.length - 1].text = device.name;
        
        return (
            <div>
                {device.name}
            </div>
        );
    }
}

export default Device;
