import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { FocusZone } from 'office-ui-fabric-react/lib/FocusZone';
import { List } from 'office-ui-fabric-react/lib/List';
import DeviceItem from './DeviceItem';

const ROWS_PER_PAGE = 3;
const MAX_ROW_HEIGHT = 250;

import './Devices.css';

@inject('store', 'views') @observer class Devices extends Component {

    constructor() {
        super();

        this._positions = {};
        this._getItemCountForPage = this._getItemCountForPage.bind(this);
        this._getPageHeight = this._getPageHeight.bind(this);
    }

    render() {
        return (
            <FocusZone>
                <List
                    className='ogn-Devices'
                    items={this.props.store.device.devices}
                    getItemCountForPage={this._getItemCountForPage}
                    getPageHeight={this._getPageHeight}
                    renderedWindowsAhead={4}
                    onRenderCell={(item, index) => (
                        <div
                            className='ogn-Devices-tile'
                            data-is-focusable={true}
                            style={{
                                width: (100 / this._columnCount) + '%'
                            }}>
                            <div className='ogn-Devices-sizer'>
                                <div onClick={() => { this.props.store.router.goTo(this.props.views.device, { id: item.id }, this.props.store) }}>
                                    <DeviceItem item={item} />
                                </div>
                            </div>
                        </div>
                    )}
                />
            </FocusZone>
        );
    }

    _getItemCountForPage(itemIndex, surfaceRect) {
        if (itemIndex === 0) {
            this._columnCount = Math.ceil(surfaceRect.width / MAX_ROW_HEIGHT);
            this._columnWidth = Math.floor(surfaceRect.width / this._columnCount);
            this._rowHeight = this._columnWidth * .8;
        }

        return this._columnCount * ROWS_PER_PAGE;
    }

    _getPageHeight(itemIndex, surfaceRect) {
        return this._rowHeight * ROWS_PER_PAGE;
    }
}


export default Devices;
