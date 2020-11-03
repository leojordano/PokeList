import React from 'react';
import firebase from 'firebase/app'
import { FiLogOut } from 'react-icons/fi'

import { Container } from './styles';

function Loged(props) {
  return (
    <Container>
        <span>Hello, {props.user}</span>
        <button onClick={() => firebase.auth().signOut()}><FiLogOut /></button>
    </Container>
  );
}

export default Loged;