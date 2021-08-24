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
    background-color: rgba(0, 0, 0, .5);
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
    padding-top: 25px;
    padding-bottom: 5px;
`

export const Title = styled.div`
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 10px;
`

export const InputBox = styled.div`
    width: calc(100% - 24px);
    padding: 0 24px;
    margin: 10px 0;
`

export const Input = styled.input`
    border: 1px solid #e4e4e4;
    border-radius: 4px;
    background-color: #e6e6e6;
    box-sizing: border-box;
    padding: 10px 12px;
    font-size: 15px;
    width: 100%;
    outline: none;
`

export const ButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 24px);
    padding: 0 12px;
    align-items: center;
`

export const SubmitButton = styled.div`
    color: #ffffff;
    background-color: rgb(94, 156, 247);
    width: 100%;
    text-align: center;
    padding: 10px 0;
    border-radius: 4px;
    font-size: 15px;
`

export const BackButton = styled.div`
    font-size: 13px;
    width: 100%;
    text-align: center;
    padding: 15px 0;
`