import styled from 'styled-components'
import { FaUser } from 'react-icons/fa'

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
`

export const Divider = styled.div`
    width: 100vw;
    background-color: #e4e4e4;
    height: 1px;
    margin-left: -15px;
`

export const ProfileImgBox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;
    row-gap: 10px;
`

export const ImgDesc = styled.div`
    color: rgb(102, 101, 101);
    width: 100%;
    text-align: center;
    font-size: 13px;
    margin-top: 15px;
`

export const ProfileImgItem = styled.img`
    width: 32vw;
    height: 32vw;
    object-fit: cover;
`

export const EmptyProfileImgItemBox = styled.label`
    width: 32vw;
    height: 32vw;
    background-color: #e4e4e4;
    display: flex;
    align-items: flex-end;
    justify-content: center;
`

export const EmptyProfileImgItem = styled(FaUser)`
    width: 80%;
    color: #ffffff;
    height: 80%;
`

export const Spacer = styled.div`
    width: 30px;
`