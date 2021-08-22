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
    }
`

export default GlobalStyle