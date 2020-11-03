import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
        outline: none;
        font-family: 'Montserrat', sans-serif;
     } 

     body {
         background-color: ${props => props.theme.color.background};
     }
`