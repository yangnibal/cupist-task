import styled from 'styled-components'

export const Container = styled.div`
    box-sizing: border-box;
    border: 1px solid #f5f5f5;
    height: 70vh;
    margin: 0 3px;
    width: calc(100% - 6px);
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    padding: 15px;
    justify-content: space-between;
`

export const Title = styled.div`
    font-weight: bold;
    font-size: 18px;
    margin-top: 5px;
`

export const Button = styled.div`
    font-size: 16px;
    background-color: #e4e4e4;
    padding: 14px 0;
    text-align: center;
    border-radius: 6px;
`