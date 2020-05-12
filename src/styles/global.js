import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;

  }


  body{
    background: #555c57;
    -webkit-font-smoothing: antialiased;
    color: #06839c;

  }

  body, input, button {
    font: 16px 'Roboto Slab', Srif

  }



  button{
    cursor: pointer
  }


  h1,h2,h3,h4,h5,h5,strong{
    font-weight: 500
  }
`;
