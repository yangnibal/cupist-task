import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`

export const HeaderBox = styled.div`
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 15px;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #f1f1f1;
    position: fixed;
    top: 0;
    background-color: #ffffff;
`

export const Title = styled.div`
    font-weight: 500;
    font-size: 18px;
`

export const ContentBox = styled.div`
    padding: 15px;
    margin-top: 50px;
`

export const Divider = styled.div`
    width: 100vw;
    background-color: #e4e4e4;
    height: 1px;
    margin-left: -15px;
`