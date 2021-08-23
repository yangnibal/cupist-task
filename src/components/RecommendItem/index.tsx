import React from 'react'
import { Container, Value, IconBox, Button } from './styles'

interface Props {
    icon?: JSX.Element
    value: string
}

const RecommendItem: React.FC<Props> = ({
    icon, value
}) => {
    return (
        <Container>
            <Value>
                <IconBox>{icon}</IconBox>
                {value}
            </Value>
            <Button>선택</Button>
        </Container>
    )
}

export default RecommendItem