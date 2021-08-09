import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.5;
    li{
      text-decoration: none;
      list-style-type: none;
    }
  }


  
`;
 
export default GlobalStyle;