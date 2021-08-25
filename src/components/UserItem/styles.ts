import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 3px;
    width: calc(100% - 6px);
    height: 70vh;
    position: relative;
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
    justify-content: center;
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
    z-index: 0;
`

export const UserInfoBox = styled.div`
    z-index: 9;
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, .02) 10%,
        rgba(0, 0, 0, .1) 20%,
        rgba(0, 0, 0, .3) 30%,
        rgba(0, 0, 0, .4) 40%
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

export const RecommendBox = styled.div`
    background-color: rgba(255, 255, 255, .5);
    color: #ffffff;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 14px;
    align-self: flex-start;
`

export const Username = styled.div`
    font-weight: bold;
    font-size: 24px;
    color: #ffffff;
`

export const ProfileBox = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 4px;
`

export const Job = styled.div`
    color: #ffffff;
    font-size: 15px;
`

export const Height = styled.div`
    color: rgb(157, 157, 157);
    font-size: 14px;
`

export const Introduce = styled.div`
    font-size: 16px;
    color: #ffffff;
`

export const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    height: 50px;
    margin-top: 10px;
`

export const BlockButton = styled.div`
    width: 50px;
    height: 100%;
    background-color: rgb(102, 101, 101);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const LikeButton = styled.div`
    width: calc(100% - 110px);
    background-color: rgb(94, 156, 247);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
`

export const SuperLikeButton = styled.div`
    width: 50px;
    height: 100%;
    background-color: rgb(94, 156, 247);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeartIconBox = styled.div`
    position: absolute;
    z-index: 10;
    background-color: rgba(255, 255, 255, .5);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

export const ImgSelectBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    top: 8px;
    height: 2px;
    z-index: 9;
`

export const ItemWrapper = styled.div`
    height: 8px;
    display: flex;
    align-items: center;
    width: 40px;
    background-color: transparent;
`

export const ImgSelectItem = styled.div<{ selected?: boolean }>`
    height: 3px;
    border-radius: 2px;
    width: 100%;
    margin: 0 2px;
    background-color: ${props => props.selected ? '#ffffff' : '#666666'};
`

export const TouchActionDiv = styled.div<{ direction: 'left' | 'right' }>`
    width: 50%;
    position: absolute;
    top: 0;
    left: ${props => props.direction==='left' ? 0 : '50%'};
    right: ${props => props.direction==='right' ? 0 : '50%'};
    height: 100%;
    width: 50%;
    background-color: transparent;
    z-index: 5;
`