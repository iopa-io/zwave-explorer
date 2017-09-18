
import AuthStore from './AuthStore';
import AppStore from './AppStore';
import DeviceStore from './DeviceStore';
import {RouterStore} from 'mobx-router';

const store = {
  auth: new AuthStore(),
  app: new AppStore(),
  device: new DeviceStore(),
  router: new RouterStore()
};

export default store;