import styled from 'styled-components'

export const HeaderBox = styled.div`
    height: 50px;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding: 0 20px;
`

export const ContentBox = styled.div`
    padding: 15px 20px;
`

export const UserInfoBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 80px;
    margin-bottom: 20px;
`

export const ProfileImg = styled.img`
    border-radius: 50%;
    object-fit: cover;
    width: 80px;
    height: 100%;
`

export const ProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    justify-content: space-between;
    height: 100%;
`

export const Username = styled.div`
    font-weight: bold;
    font-size: 18px;
`

export const Job = styled.div`
    color: rgb(157, 157, 157);
    font-size: 14px;
`

export const EditButton = styled.div`
    border: 1px solid #d2d2d2;
    border-radius: 4px;
    padding: 4px 0;
    font-size: 15px;
    width: calc(100vw - 135px);
    text-align: center;
    margin-top: 5px;
`

export const Divider = styled.div`
    width: 100vw;
    background-color: #e4e4e4;
    height: 1px;
    margin-left: -20px;
`