import React from 'react'
import { Container, Type, Value } from './styles'

interface Props {
    type: string
    value: string
    editable?: boolean
    multiline?: boolean
}

const EditProfileItem: React.FC<Props> = ({
    type, value, editable, multiline
}) => {
    return (
        <Container>
            <Type>{type}</Type>
            <Value editable={editable ? editable : false}>{value}</Value>
        </Container>
    )
}

export default EditProfileItem