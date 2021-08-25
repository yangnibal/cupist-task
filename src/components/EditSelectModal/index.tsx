import React from 'react'
import { useState } from 'react'
import { useMemo } from 'react'
import { parseUserInfoType } from '../../utils/common'
import { Container, Background, ModalBox, Title, ListBox, ListItem, MultiSelectItemBox, Desc, MultiSelectListItem, SubmitButton } from './styles'
import { IoIosCheckboxOutline, IoIosCheckbox } from 'react-icons/io'
import { useEffect } from 'react'

interface Props {
    type?: string
    value?: string | number
    onClickCancel: () => void
    onSubmit: (value: string | string[]) => void
}

const ICON_SIZE = 24

const EditSelectModal: React.FC<Props> = ({
    type, value, onClickCancel, onSubmit
}) => {

    const parsedType = useMemo(() => parseUserInfoType(type!), [type])
    const [ newValue, setNewValue ] = useState(value)

    const onClick = (value: string) => {
        onSubmit(value)
        onClickCancel()
    }

    const onClickMulti = (value: string) => {
        let arr: string[] = []
        if(newValue?.toString().includes(value)){
            arr = newValue.toString().split(', ')!
            arr = arr.filter(index => index!==value)
            setNewValue(arr.join(', '))
        } else {
            if(newValue?.toString().length){
                arr = newValue?.toString().split(', ')!
            }
            if(parsedType==='personality' && arr?.length===3){
                return
            }
            arr?.push(value)
            setNewValue(arr?.join(', '))
        }
    }

    const onSubmitMulti = () => {
        onSubmit(newValue?.toString().split(', ')!)
        onClickCancel()
    }

    return (
        <Container>
            <Background onClick={onClickCancel}/>
            <ModalBox>
                <Title>{type}</Title>
                {parsedType==='personality' && <Desc>최대 3개까지 선택 할 수 있습니다</Desc>}
                <ListBox>
                    {parsedType==='height' ? (
                        heightList.map(height => (
                            <ListItem key={height} selected={`${String(height)}cm`===value} onClick={() => onClick(`${String(height)}`)}>{height}cm</ListItem>
                        ))
                    ) : parsedType==='bodytype' ? (
                        bodytypeList.map(bodytype => (
                            <ListItem key={bodytype} selected={bodytype===value} onClick={() => onClick(bodytype)}>{bodytype}</ListItem>
                        ))
                    ) : parsedType==='religion' ? (
                        religionList.map(religion => (
                            <ListItem key={religion} selected={religion===value} onClick={() => onClick(religion)}>{religion}</ListItem>
                        ))
                    ) : parsedType==='academicBackground' ? (
                        academicBackgroundList.map(background => (
                            <ListItem key={background} selected={background===value} onClick={() => onClick(background)}>{background}</ListItem>
                        ))
                    ) : parsedType==='drink' ? (
                        drinkList.map(drink => (
                            <ListItem key={drink} selected={drink===value} onClick={() => onClick(drink)}>{drink}</ListItem>
                        ))
                    ) : parsedType==='smoke' ? (
                        smokeList.map(smoke => (
                            <ListItem key={smoke} selected={smoke===value} onClick={() => onClick(smoke)}>{smoke}</ListItem>
                        ))
                    ) : parsedType==='bloodType' ? (
                        bloodTypeList.map(type => (
                            <ListItem key={type} selected={type===value} onClick={() => onClick(type)}>{type}</ListItem>
                        ))
                    ) : parsedType==='race' ? (
                        raceList.map(race => (
                            <MultiSelectItemBox onClick={() => onClickMulti(race)} key={race}>
                                <MultiSelectListItem>{race}</MultiSelectListItem>
                                {newValue?.toString().includes(race) ? (
                                    <IoIosCheckbox color='rgb(94, 156, 247)' size={ICON_SIZE}/>
                                ) : (
                                    <IoIosCheckboxOutline size={ICON_SIZE}/>
                                )}
                            </MultiSelectItemBox>
                        ))
                    ) : parsedType==='personality' ? (
                        personalityList.map(personality => (
                            <MultiSelectItemBox onClick={() => onClickMulti(personality)} key={personality}>
                                <MultiSelectListItem>{personality}</MultiSelectListItem>
                                {newValue?.toString().includes(personality) ? (
                                    <IoIosCheckbox color='rgb(94, 156, 247)' size={ICON_SIZE}/>
                                ) : (
                                    <IoIosCheckboxOutline size={ICON_SIZE}/>
                                )}
                            </MultiSelectItemBox>
                        ))
                    ) : null}
                </ListBox>
                {(parsedType==='race' || parsedType==='personality') && (
                    <SubmitButton onClick={onSubmitMulti}>확인</SubmitButton>
                )}
            </ModalBox>
        </Container>
    )
}

export default EditSelectModal

const heightList = Array.from(Array(80).keys()).map(key => key + 120)
const religionList = ['무교', '불교', '기독교', '천주교']
const academicBackgroundList = ['고등학교', '전문대', '대학교', '석사', '박사', '기타']
const drinkList = ['안 함', '가끔', '자주']
const smokeList = ['안 함', '가끔', '자주']
const bloodTypeList = ['A형', 'B형', 'O형', 'AB형']
const raceList = ['한국인', '라틴계', '베트남인', '백인/코카서스 인종', '아랍인', '아메리카 원주민', '일본인', '중국인', '태국인', '태평양 제도민', '필리핀인', '흑인/아프리카계', '히스패닉', '기타 아시아인', '기타']
const personalityList = ['활발한', '애교있는', '주도적인', '웃긴', '감성적인', '도발적인', '수줍은', '털털한', '성실한', '조용한', '친절한', '엉뚱한', '정직한', '낙천적인', '단순한', '도도한']





const bodytypeList = ['마름', '슬림 근육', '보통', '근육질', '통통', '우람']