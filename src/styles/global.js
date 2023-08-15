import { createGlobalStyle } from 'styled-Components';

export default createGlobalStyle`   
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${({ theme }) => theme.colors.BACKGROUND_900};
        color: ${({ theme }) => theme.colors.WHITE};
    }

    body, input, button, textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;
        -webkit-font-smoothing: antialiased;
    }

    a {
        text-decoration: none;
    }

    button, a  {
        cursor: pointer;
        transition: opacity 0.2s;
    }

    button:hover {
        filter: brightness(0.8);
    }

    li {
        list-style: none;
    }
`;
