/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import firebase from 'react-native-firebase';

console.log(`DEBUG:`, firebase);

var firebaseConfig = {
  apiKey: "AIzaSyAmXNNqM2ZkTKm-StGwGyD2qnDsQxMffXg",
  authDomain: "meetuprn.firebaseapp.com",
  databaseURL: "https://meetuprn.firebaseio.com",
  projectId: "meetuprn",
  storageBucket: "meetuprn.appspot.com",
  messagingSenderId: "887258405982",
  appId: "1:887258405982:web:c5d4f97de8dfcb73"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged((user) => {
  console.log('USER', user);
  firebase.firestore().collection('emails').add({name: "Some Emails"}).then(console.log).catch(console.error);
  firebase.firestore().collection('invoices').add({name: "Some Invoice : # 1"}).then(console.log).catch(console.error);
  firebase.firestore().collection('invoices').add({name: "Some Invoice : # 2"}).then(console.log).catch(console.error);
});

firebase.auth().signInWithEmailAndPassword('a@a.com', 'aaa123').catch((e) => {
  console.log(`ERROR`, e);
});


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>ANGEL DID THIS: Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
