import { observable, computed } from 'mobx';

export default class AppStore {
  @observable appName = 'Zwave Explorer';


  constructor() {
    document.title = this.appName;
  }

}
