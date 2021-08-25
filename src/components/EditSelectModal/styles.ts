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
    max-height: 60%;
    position: relative;
`

export const Title = styled.div`
    font-size: 17px;
    font-weight: 500;
    margin-bottom: 10px;
    top: 25px;
    background-color: #ffffff;
`

export const ListBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 10px 20px;
    margin-top: 20px;
    overflow-y: scroll;
    width: 100%;
    border-top: 1px solid #e4e4e4;
`

export const ListItem = styled.div<{ selected?: boolean }>`
    width: 100%;
    padding: 10px 0;
    color: ${props => props.selected ? 'rgb(94, 156, 247)' : '#000000'};
`

export const MultiSelectItemBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    padding: 10px 0;
    align-items: center;
`

export const MultiSelectListItem = styled.div`
`

export const Desc = styled.div`
    color: #555555;
`

export const SubmitButton = styled.div`
    background-color: rgb(94, 156, 247);
    width: calc(100% - 30px);
    text-align: center;
    padding: 6px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 4px;
    color: #ffffff;
`