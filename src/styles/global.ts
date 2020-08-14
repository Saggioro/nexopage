import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body {
      background-image: linear-gradient(to bottom right, indigo, purple, blue );
        color: #FFF;
        -webkit-font-smoothing: antialiased;
    }

    body, input, button {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;

    }

    h1,h2,h3,h4,h5,h6, strong {
        font-weight: 500;
    }
    button{
        cursor: pointer;
    }
`;
