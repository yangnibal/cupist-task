import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 3px;
    width: calc(100% - 6px);
    height: 70vh;
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
`

export const Item = styled.div`
    width: calc(50% - 5px);
    height: calc(50% - 5px);
    border-radius: 8px;
    position: relative;
    display: flex;
    align-items: flex-end;
`

export const ProfileImg = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
`

export const UserInfoBox = styled.div`
    z-index: 9;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, .02) 10%,
        rgba(0, 0, 0, .2) 20%,
        rgba(0, 0, 0, .4) 30%,
        rgba(0, 0, 0, .5) 40%
    );
    display: flex;
    flex-direction: column;
    width: 100%;
    box-sizing: border-box;
    padding: 12px;
    padding-top: 20px;
    border-radius: 8px;
    row-gap: 5px;
`

export const Username = styled.div`
    color: #ffffff;
    font-weight: bold;
`

export const Job = styled.div`
    color: #ffffff;
    font-size: 13px;
`

export const Region = styled.div`
    color: #ffffff;
    font-size: 13px;
`

export const Button = styled.div`
    background-color: rgb(94, 156, 247);
    border-radius: 4px;
    text-align: center;
    padding: 6px 0;
    font-size: 15px;
    font-weight: 500;
    color: #ffffff;
`