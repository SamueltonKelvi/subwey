import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    html, body{
        max-width: 100%;
        font-family: 'Roboto', sans-serif;
        height: 100%;
        scroll-behavior: smooth;
    }
`;