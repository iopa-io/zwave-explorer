import firebase from 'firebase'
import { config } from '~/firebase.config.js'

export const firebaseApp = firebase.initializeApp(config)