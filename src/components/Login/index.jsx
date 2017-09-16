import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Dialog, DialogType, DialogFooter } from 'office-ui-fabric-react/lib/Dialog';
import { DefaultButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';

@inject("store") @observer
class Login extends Component {

  render() {
    return (
      <Dialog
        hidden={this.props.store.auth.isLoggedin }
        dialogContentProps={{
          type: DialogType.largeHeader,
          title: this.props.store.app.appName,
          subText: 'Login with your social provider'
        }}
        modalProps={{
          isBlocking: true,
          containerClassName: 'ms-dialogMainOverride'
        }}>
        <DialogFooter>
          <DefaultButton iconProps={{ iconName: 'SecurityGroup' }} text="Continue with Github" onClick={this.props.store.auth.doLogin} />
        </DialogFooter>
      </Dialog>
    )
  }
};

export default Login;

