import React from 'react'
import { Container, MContainer, Type, Value, Input } from './styles'

interface Props {
    type: string
    value?: string
    editable?: boolean
    multiline?: boolean
    placeholder?: string
}

const EditProfileItem: React.FC<Props> = ({
    type, value, editable, multiline, placeholder
}) => {
    return multiline ? (
        <MContainer>
            <Type>{type}</Type>
            <Input 
                placeholder={placeholder}
            />
        </MContainer>
    ) : (
        <Container>
            <Type>{type}</Type>
            <Value editable={editable===undefined ? true : editable}>{value}</Value>
        </Container>
    )
}

export default EditProfileItem