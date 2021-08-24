import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url(http://fonts.googleapis.com/earlyaccess/notosanskr.css);
    body{
        margin: 0;
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar{
            display: none;
        }
    }
    *{
        font-family: 'Noto Sans KR', sans-serif;
        &::marker{
            display: none!important;
        }
    }
    [class^='control']{
        display: none;
    }
    ul{
        padding: 0;
    }
`

export default GlobalStyle