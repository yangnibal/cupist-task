import styled from 'styled-components'
import Slider from 'react-slick'

export const HeaderBox = styled.div`
    height: 50px;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: fixed;
    top: 0;
    background-color: #ffffff;
    z-index: 99;
    width: 100%;
`

export const Glam = styled.p`
    font-weight: bold;
    color: #000000;
    font-size: 22px;
    margin-left: 15px;
    height: 100%;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #000000;
    box-sizing: border-box;
`

export const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    align-items: center;
    margin-top: 5px;
    padding-bottom: 75px;
    padding-top: 50px;
`