import React from 'react'
import { ArrowIcon, Container, IconBox, LeftContentWrapper, ValueBox } from './styles'
import { IoIosArrowForward } from 'react-icons/io'

interface Props {
    value: string
    icon?: JSX.Element
}

const ProfileItem: React.FC<Props> = ({
    value, icon
}) => {
    return (
        <Container>
            <LeftContentWrapper>
                {icon && <IconBox>{icon}</IconBox>}
                <ValueBox>{value}</ValueBox>
            </LeftContentWrapper>
            <ArrowIcon>
                <IoIosArrowForward color='gray' size={18}/>
            </ArrowIcon>
        </Container>
    )
}

export default ProfileItem