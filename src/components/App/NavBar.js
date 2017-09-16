import React, { Component } from 'react'
import { IconButton, CommandButton, IButtonProps } from 'office-ui-fabric-react/lib/Button'

import { Label } from 'office-ui-fabric-react/lib/Label';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';
import {
  Persona,
  PersonaSize,
  PersonaPresence,
} from 'office-ui-fabric-react/lib/Persona';
import { Panel } from 'office-ui-fabric-react/lib/Panel';
import { inject, observer } from 'mobx-react';

import './NavBar.css';

@inject("store") @observer class NavBar extends Component {

  constructor() {
    super();
    this.state = {
      showPanel: false
    };
  }

  render() {
    return (
      <div>
        <Panel
          isOpen={this.state.showPanel}
          isLightDismiss={true}
          headerText="My Account"
          onDismiss={() => this.setState({ showPanel: false })}
        >
          <Persona
            imageUrl={this.props.store.auth.photoURL}
            primaryText={this.props.store.auth.displayName}
            secondaryText={this.props.store.auth.userName}
            size={PersonaSize.regular}
            presence={PersonaPresence.none}
            hidePersonaDetails={false}
          />
          <div>
            <CommandButton
              data-automation-id='test'
              iconProps={{ iconName: 'OutOfOffice' }}
              onClick={() => { this.setState({ showPanel: false }); this.props.store.auth.doLogout(); }}
            >SignOut</CommandButton>
          </div>
        </Panel>
        <div className="NavBar">
          <div className="logo">
            <img src='/logo.svg' width='190' height='48' />
          </div>
          <div className="userNav">
            <Label className="userName" onClick={() => this.setState({ showPanel: true })} >{this.props.store.auth.displayName}</Label>
            <div className="userHeader">
              <Persona
                imageUrl={this.props.store.auth.photoURL}
                primaryText={this.props.store.auth.displayName}
                size={PersonaSize.small}
                presence={PersonaPresence.none}
                hidePersonaDetails={true}
                onClick={() => this.setState({ showPanel: true })}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar
