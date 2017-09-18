import { observable, computed } from 'mobx';

export default class AppStore {
  @observable appName = 'Zwave Explorer';
  @observable properties = { breadcrumbs: [] }

  constructor() {
    document.title = this.appName;
  }

}
