import React from 'react'
import { useState } from 'react'
import { parsePostPosition } from '../../utils/common'
import { Container, Background, ModalBox, Title, ButtonBox, SubmitButton, BackButton, InputBox, Input } from './styles'

interface Props {
    type?: string
    value?: string
    onClickCancel: () => void
    onSubmit: (value: string) => void
}

const EditModal: React.FC<Props> = ({
    type, onClickCancel, onSubmit, value
}) => {

    const [ editedValue, setEditedValue ] = useState<string>(value || '')

    return (
        <Container>
            <Background onClick={onClickCancel}/>
            <ModalBox>
                <Title>{parsePostPosition(type!)} 변경하시겠어요?</Title>
                <InputBox>
                    <Input 
                        placeholder={type}
                        value={editedValue}
                        onChange={(e) => setEditedValue(e.target.value)}    
                    />
                </InputBox>
                <ButtonBox>
                    <SubmitButton onClick={() => onSubmit(editedValue)}>닉네임 변경</SubmitButton>
                    <BackButton onClick={onClickCancel}>돌아가기</BackButton>
                </ButtonBox>
            </ModalBox>
        </Container>
    )
}

export default EditModal