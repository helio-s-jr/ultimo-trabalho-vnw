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
        transition: 1s;
        opacity: 100%;
    }

    .imgs-footer:hover{
        animation: shake 0.4s;
        
        animation-iteration-count: infinite;
    }
    @keyframes shake {
        0% { transform: translate(1px, 1px) rotate(0deg); }
        10% { transform: translate(-1px, -2px) rotate(-1deg); }
        20% { transform: translate(-3px, 0px) rotate(1deg); }
        30% { transform: translate(3px, 2px) rotate(0deg); }
        40% { transform: translate(1px, -1px) rotate(1deg); }
        50% { transform: translate(-1px, 2px) rotate(-1deg); }
        60% { transform: translate(-3px, 1px) rotate(0deg); }
        70% { transform: translate(3px, 1px) rotate(-1deg); }
        80% { transform: translate(-1px, -1px) rotate(1deg); }
        90% { transform: translate(1px, 2px) rotate(0deg); }
        100% { transform: translate(1px, -2px) rotate(-1deg); }
      }
`