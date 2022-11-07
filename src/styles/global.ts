import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 2px solid #307DB8;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background-image: linear-gradient(180deg, rgba(29, 33, 35, 0.8) 0%, #1D2123 61.48%), url('/src/assets/background.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button, a {
    font-family: 'Quicksand', sans-serif;
    color: ${({ theme }) => theme.colors.light};
  }

  a {
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`;
