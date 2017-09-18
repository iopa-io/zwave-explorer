import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

class DeviceItem extends Component {
    render() {
        var { item } = this.props;
        return (
            <div className='ogn-Devices-padder' >
                <img src={item.thumbnail} className='ogn-Devices-image' />
                <span className='ogn-Devices-label'>
                    {item.name}
                </span>
            </div>
        );
    }
}

export default DeviceItem;
