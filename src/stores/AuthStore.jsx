import { observable, computed } from 'mobx';
import firebase from 'firebase';

export default class AuthStore {
  @observable uid = '';
  @observable displayName = '';
  @observable userName = '';
  @observable photoURL = '';
 
  @computed get isLoggedin() {
    return !!this.uid;
  }

  constructor() {
    this.doLogin = this.doLogin.bind(this);
  }

  doLogin() {
     setTimeout(() => { this.loginStarted = false }, 2000)
    let provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithRedirect(provider);
  }

  doLogout() {
    firebase.auth().signOut()
  }

  refLogin() {
    firebase.auth().onAuthStateChanged(user => {
       if (!user) {
        this.clearUserInfo();
        return;
      }
      this.setUserInfo(user);
    });
  }

  setUserInfo(user) {
    this.uid = user.uid;
    this.displayName = "Nashville, TN";
    this.userName = user.displayName;
    this.photoURL = user.photoURL;
  }

  clearUserInfo() {
    this.uid = '';
    this.displayName = '';
    this.userName = '';
    this.photoURL = '';
  }
}
