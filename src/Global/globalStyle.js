import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle `
    *{
        margin: 0;
        paddin: 0;
        border: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }
    
    .link-header{
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2em;
        font-weight: 700;
        cursor: pointer;
        text-decoration-line: none;
    }

    .p-header{
        color: #8A038C;
        font-weight: 700;
        text-shadow: 10px;
        opacity: 45%;
    }

    .p-header: hover{
        color: #BE1675;
        transform: scale(1.1);
        transition: 1s, 1s;
        opacity: 100%;
    }
`