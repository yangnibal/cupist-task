import React from 'react'
import { Background, Button, ButtonBox, Container, Divider, Message, ModalBox, Title } from './styles'

interface Props {
    onClickCancel: () => void
    onClickBlock: () => void
}

const BlockModal: React.FC<Props> = ({
    onClickBlock, onClickCancel
}) => {
    return (
        <Container>
            <Background onClick={onClickCancel}/>
            <ModalBox>
                <Title>상대를 삭제하시겠어요?</Title>
                <Message>이 상대는 더 이상 표시되지 않습니다</Message>
                <ButtonBox>
                    <Button onClick={onClickCancel}>아니요</Button>
                    <Divider/>
                    <Button onClick={onClickBlock}>예</Button>
                </ButtonBox>
            </ModalBox>
        </Container>
    )
}

export default BlockModal