import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Barlow Semi Condensed', sans-serif;
}
.App{
    width: 100%;
    min-height: 100vh;
    background-color: hsl(214, 47%, 23%);
}
`
export default GlobalStyle;