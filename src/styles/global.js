import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    body{
        max-width: 1400px;
        font-family: 'Roboto', sans-serif;
        height: 100%;
        scroll-behavior: smooth;
    }
`;