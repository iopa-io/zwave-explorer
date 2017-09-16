
import AuthStore from './AuthStore';
import AppStore from './AppStore';
import {RouterStore} from 'mobx-router';

const store = {
  auth: new AuthStore(),
  app: new AppStore(),
  router: new RouterStore()
};

export default store;