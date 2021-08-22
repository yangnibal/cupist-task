import React from 'react'
import { Container, IconBox } from './styles'
import { BsHouseDoorFill, BsHouseDoor, BsGridFill, BsGrid, BsHeart, BsHeartFill, BsPersonFill, BsPerson, BsChatFill, BsChat } from 'react-icons/bs'
import { useHistory, useLocation } from 'react-router-dom'
import { PATHS } from '../../constants/paths'

const ICON_SIZE = 26

const BottomTab = () => {

    const history = useHistory()

    const location = useLocation()

    return (
        <Container>
            <IconBox onClick={() => history.push(PATHS.HOME)}>
                {location.pathname===PATHS.HOME ? <BsHouseDoorFill size={ICON_SIZE}/> : <BsHouseDoor size={ICON_SIZE}/>}
            </IconBox>
            <IconBox>
                <BsGrid size={ICON_SIZE}/>
            </IconBox>
            <IconBox>
                <BsHeart size={ICON_SIZE}/>
            </IconBox>
            <IconBox>
                <BsChat size={ICON_SIZE}/>
            </IconBox>
            <IconBox onClick={() => history.push(PATHS.PROFILE)}>
                {location.pathname===PATHS.PROFILE ? <BsPersonFill size={ICON_SIZE}/> : <BsPerson size={ICON_SIZE}/>}
            </IconBox>
        </Container>
    )
}

export default BottomTab