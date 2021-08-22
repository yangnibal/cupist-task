import React from 'react'
import { Container } from './styles'
import BottomTab from '../BottomTab'

const Layout: React.FC = ({
    children
}) => {
    return (
        <Container>
            {children}
            <BottomTab/>
        </Container>
    )
}

export default Layout