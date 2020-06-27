import React from 'react';
import 'firebase/storage';
import * as firebase from 'firebase/app';
import {firebaseConfig} from './firebase.js';

// Initialize Firebase
// firebaseConfig is the object with apiKey, authDomain, etc
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage().ref();

class JunoPhoto extends React.Component {
	constructor(props) {
		super();
		this.state = {
			url: '',
		};

		this.getPhotoUrl('juno.jpg');
  }

  getPhotoUrl(url) {
		storage.child(url).getDownloadURL().then((url) => {
			this.setState({url});
		});
  }

  render() {
		return (
			<img alt='Dog' src={this.state.url} width='200px' />
    );
  }
}

export default JunoPhoto;
