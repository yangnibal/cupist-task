import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 50px;
`

export const Type = styled.div`
    width: 35%;
`

export const Value = styled.div<{ editable: boolean }>`
    width: 65%;
    color: ${props => props.editable ? 'rgb(94, 156, 247)' : '#000000'};
`

export const MContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 80px;
    justify-content: center;
`

export const Input = styled.input`
    outline: none;
    border: none;
    font-size: 15px;
    padding: 0;
    padding-top: 5px;
    box-sizing: border-box;
    margin-top: 3px;
    outline: none;
`

export const SingleLineInput = styled.input`
    outline: none;
    font-size: 16px;
    border: none;
    width: 65%;
    color: rgb(94, 156, 247);
`