import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle `
    *{
        margin: 0;
        paddin: 0;
        border: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
    
    .decohome, .decobio, .decoprojetos, .decosocial, .decocontatos{
        text-decoration-line: none;
    }

`

