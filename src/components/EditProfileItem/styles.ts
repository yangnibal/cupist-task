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