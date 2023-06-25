import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: content-box;
        margin: 0;
        padding: 0;
    }
    
    body {
        background-color: #f8f8f8;
        font-family: Arial, sans-serif;
    }

    @media (max-width: 768px) {
    /* Define responsive styles for small screens here */
    }

    @media (min-width: 769px) and (max-width: 1024px) {
    /* Define responsive styles for medium screens here */
    }

    @media (min-width: 1025px) {
    /* Define responsive styles for large screens here */
    }

`;

export default GlobalStyles;