import React from 'react'
import { Container, HeaderBox, Title, ContentBox, Divider, ProfileImgBox, ImgDesc, ProfileImgItem, EmptyProfileImgItemBox, EmptyProfileImgItem, Spacer } from './styles'
import { BsX } from 'react-icons/bs'
import { useHistory } from 'react-router-dom'
import EditProfileItem from '../../components/EditProfileItem'
import { useState } from 'react'
import EditModal from '../../components/EditModal'
import { parseUserInfoType } from '../../utils/common'
import { useRecoilState } from 'recoil'
import { userInfoAtom } from '../../store/users'
import EditSelectModal from '../../components/EditSelectModal'

interface ProfileItemProps {
    type?: string
    value?: string
    multiline?: string
    onChange?: (value: string) => void
    onClick?: (type: string, value: string) => void
    placeholder?: string
    editable?: boolean
    divider?: boolean
}

const EditProfile = () => {

    const history = useHistory()

    const [ user, setUser ] = useRecoilState(userInfoAtom)

    const [ modalData, setModalData ] = useState<{ type: string, value: string }>({
        type: '',
        value: ''
    })
    const [ editModalOn, setEditModalOn ] = useState<boolean>(false)
    const [ editSelectModalOn, setEditSelectModalOn ] = useState<boolean>(false)

    const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.[0]){
            let reader = new FileReader()
            reader.onload = (ev) => {
                if(user.profileImgs){
                    let firstEmptyFileIndex = user.profileImgs.findIndex(img => img==='')
                    let newProfileImgs = [...user.profileImgs]
                    newProfileImgs[firstEmptyFileIndex] = ev.target?.result as string
                    setUser({...user, profileImgs: newProfileImgs})
                }
            }
            reader.readAsDataURL(e.target.files[0])
        } else {
            
        }
    }

    const showModal = (type: string, value: string) => {
        setModalData({
            type: type,
            value: value
        })
        setEditModalOn(true)
    }

    const showSelectModal = (type: string, value: string) => {
        setModalData({
            type: type,
            value: value
        })
        setEditSelectModalOn(true)
    }

    const cancelEdit = () => {
        setEditModalOn(false)
        setEditSelectModalOn(false)
        setModalData({
            type: '',
            value: ''
        })
    }

    const submitEdit = (value: string | string[]) => {
        const type = parseUserInfoType(modalData.type)
        setUser({
            ...user,
            [type]: value
        })
        setEditModalOn(false)
    }

    const onChange = (type: string, value: string) => {
        setUser({
            ...user,
            [type]: value
        })
    }

    return (
        <Container>
            {editModalOn && <EditModal {...modalData} onClickCancel={cancelEdit} onSubmit={submitEdit}/>}
            {editSelectModalOn && <EditSelectModal {...modalData} onClickCancel={cancelEdit} onSubmit={submitEdit}/>}
            <input type='file' style={{ display: 'none' }} onChange={uploadImage} id='file'/>
            <HeaderBox>
                <BsX size={30} onClick={() => history.goBack()}/>
                <Title>프로필 수정</Title>
                <Spacer/>
            </HeaderBox>
            <ProfileImgBox>
                {user.profileImgs?.map((img, index) => img ? (
                    <ProfileImgItem src={img} key={index}/>
                ) : (
                    <EmptyProfileImgItemBox key={index} htmlFor='file'>
                        <EmptyProfileImgItem/>
                    </EmptyProfileImgItemBox>
                ))}
            </ProfileImgBox>
            <ImgDesc>다양한 매력을 보여줄 수 있는 사진을 올려주세요 <b>더 알아보기</b></ImgDesc>
            <ContentBox>
                <Divider/>
                <EditProfileItem type='닉네임' value={user.username} onClick={showModal}/>
                <EditProfileItem type='성별' value={user.gender} editable={false} onClick={() => {}}/>
                <EditProfileItem type='생일' value={user.birthday} onClick={showModal}/>
                <EditProfileItem type='위치' value={user.region}/>
                <Divider/>
                <EditProfileItem 
                    type='소개' 
                    value={user.introduce} 
                    multiline
                    placeholder='회원님의 매력을 간단하게 소개해주세요' 
                    onChange={(value) => onChange('introduce', value)}
                />
                <Divider/>
                <EditProfileItem type='키' value={`${String(user.height)}cm`} onClick={showSelectModal}/>
                <EditProfileItem type='체형' value={user.bodytype} onClick={showSelectModal}/>
                <Divider/>
                <EditProfileItem 
                    type='직장' 
                    value={user.company} 
                    onChange={(value) => onChange('company', value)}
                />
                <EditProfileItem type='직업' value={user.job}/>
                <EditProfileItem 
                    type='학력' 
                    value='고등학교'
                    onClick={showSelectModal}    
                />
                <EditProfileItem type='학교' value={user.school} onChange={(value) => onChange('school', value)}/>
                <Divider/>
                <EditProfileItem type='성격' value={user.personality?.join(', ')} onClick={showSelectModal}/>
                <EditProfileItem type='종교' value={user.religion} onClick={showSelectModal}/>
                <EditProfileItem type='음주' value={user.drink} onClick={showSelectModal}/>
                <EditProfileItem type='흡연' value={user.smoke} onClick={showSelectModal}/>
                <EditProfileItem type='혈액형' value={user.bloodType} onClick={showSelectModal}/>
                <EditProfileItem type='인종' value={user.race?.join(', ')} onClick={showSelectModal}/>
                <Divider/>
                <EditProfileItem 
                    type='매력 포인트' 
                    multiline 
                    placeholder='입력해주세요' 
                    value={user.attractive} 
                    onChange={(value) => onChange('attractive', value)}
                />
                <EditProfileItem 
                    type='관심사' 
                    multiline 
                    placeholder='입력해주세요' 
                    value={user.hobby}
                    onChange={(value) => onChange('hobby', value)}
                />
                <EditProfileItem 
                    type='라이프 스타일' 
                    multiline 
                    placeholder='입력해주세요' 
                    value={user.lifestyle}
                    onChange={(value) => onChange('lifestyle', value)}
                />
            </ContentBox>
        </Container>
    )
}

export default EditProfile