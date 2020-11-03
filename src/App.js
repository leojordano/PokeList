import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import usePersistedState from './ultils/usePersistedState'
import firebase from 'firebase/app'
import "firebase/auth";
import { FirebaseAuthProvider, FirebaseAuthConsumer,  } from '@react-firebase/auth'
import { FcGoogle } from 'react-icons/fc'
import { AiOutlineGoogle } from 'react-icons/ai'

import { GlobalStyle } from './global'
import { ButtonSign } from './styles'
import light from './themes/light'
import dark from './themes/dark'
import { firebaseConfig } from './utils/firebaseUtils'

import Header from './components/Header'
import Loged from './components/Loged';

function App() {
  const [theme, setTheme] = usePersistedState('theme', light)
  const [loged, setLoged] = useState(false)
  const [userLoged, setUserLoged] = useState()

  setInterval(() => {
      // console.log(loged)
  }, 5000)

  const toggleTheme = () => {
    setTheme(theme.title == 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme} >

      <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
      <div className="App">
        <GlobalStyle />
        <Header toggleTheme={toggleTheme} >

        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            setLoged(true)
            setUserLoged(user)
            
            if(isSignedIn) {
              return (
                <>
                  <Loged user={user.displayName} />
                </>
              )
            } else {
              return (
                <>
                <ButtonSign
                  onClick={() => {
                    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                    firebase.auth().signInWithPopup(googleAuthProvider);
                  }}
                >
                  {theme.title == 'dark' ? <FcGoogle /> : <AiOutlineGoogle />}
                </ButtonSign>
                </>
              )
            }
          }}
        </FirebaseAuthConsumer>

        

        

        </Header>
      </div>

      </ FirebaseAuthProvider>
          
    </ThemeProvider>
  );
}

export default App;
