import React from 'react'
import { Container, MContainer, Type, Value, Input, SingleLineInput } from './styles'

interface Props {
    type: string
    value?: string
    editable?: boolean
    multiline?: boolean
    placeholder?: string
    onClick?: (type: string, value: string) => void
    onChange?: (value: string) => void
}

const EditProfileItem: React.FC<Props> = ({
    type, value, editable, multiline, placeholder, onClick, onChange
}) => {
    return multiline ? (
        <MContainer onClick={() => onClick?.(type, value!)}>
            <Type>{type}</Type>
            <Input 
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
            />
        </MContainer>
    ) : (
        <Container onClick={() => onClick?.(type, value!)}>
            <Type>{type}</Type>
            {onClick ? (
                <Value editable={editable===undefined ? true : editable}>{value}</Value>
            ) : (
                <SingleLineInput
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    placeholder='입력해주세요'
                />
            )}
        </Container>
    )
}

export default EditProfileItem