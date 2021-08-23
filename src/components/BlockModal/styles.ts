import styled from 'styled-components'

export const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
`

export const Background = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(255, 255, 255, .5);
    z-index: 100;
`

export const ModalBox = styled.div`
    background-color: #ffffff;
    z-index: 101;
    border-radius: 6px;
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
`

export const Title = styled.div`
    font-size: 17px;
    font-weight: bold;
`

export const Message = styled.div`
    font-size: 14px;
    color: rgb(157, 157, 157);
    padding: 10px 0 15px 0;
`

export const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    border-top: 1px solid #e4e4e4;
    width: 100%;
`

export const Button = styled.div`
    text-align: center;
    width: calc(50% - .5px);
    padding: 14px 0;
    font-size: 15px;
    color: rgb(94, 156, 247);
`

export const Divider = styled.div`
    width: 1px;
    height: 47px;
    background-color: #e4e4e4;
`