import React from 'react'
import { Container, HeaderBox, Title, ContentBox, Divider, ProfileImgBox, ImgDesc, ProfileImgItem, EmptyProfileImgItemBox, EmptyProfileImgItem, Spacer } from './styles'
import { BsX } from 'react-icons/bs'
import { useHistory } from 'react-router-dom'
import EditProfileItem from '../../components/EditProfileItem'
import myInfo from '../../data/myInfo.json'
import { useState } from 'react'
import { User } from '../../models/users'
import EditModal from '../../components/EditModal'
import { useEffect } from 'react'
import { parseUserInfoType } from '../../utils/common'

const EditProfile = () => {

    const history = useHistory()

    const [ user, setUser ] = useState<Partial<User>>(myInfo)
    const [ modalData, setModalData ] = useState<{ type: string, value: string }>({
        type: '',
        value: ''
    })
    const [ editModalOn, setEditModalOn ] = useState<boolean>(false)

    const uploadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files?.[0]){
            let reader = new FileReader()
            console.log('file')
            reader.onload = (ev) => {
                let text = reader.result
                console.log('onload')
                if(user.profileImgs){
                    let firstEmptyFileIndex = user.profileImgs.findIndex(img => img==='')
                    let newProfileImgs = user.profileImgs
                    newProfileImgs[firstEmptyFileIndex] = ev.target?.result as string
                    setUser({...user, profileImgs: newProfileImgs})
                }
                console.log(text)
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

    const cancelEdit = () => {
        setEditModalOn(false)
        setModalData({
            type: '',
            value: ''
        })
    }

    const submitEdit = (value: string) => {
        const type = parseUserInfoType(modalData.type)
        setUser({
            ...user,
            [type]: value
        })
        setEditModalOn(false)
    }

    return (
        <Container>
            {editModalOn && <EditModal {...modalData} onClickCancel={cancelEdit} onSubmit={submitEdit}/>}
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
                <EditProfileItem type='성별' value={user.gender} editable={false}/>
                <EditProfileItem type='생일' value='2002-02-12'/>
                <EditProfileItem type='위치' value={user.region}/>
                <Divider/>
                <EditProfileItem type='소개' value={user.introduce} multiline placeholder='회원님의 매력을 간단하게 소개해주세요' onChange={(value) => setUser({...user, introduce: value})}/>
                <Divider/>
                <EditProfileItem type='키' value={`${String(user.height)}cm`}/>
                <EditProfileItem type='체형' value='보통'/>
                <Divider/>
                <EditProfileItem type='직장' value=''/>
                <EditProfileItem type='직업' value={user.job}/>
                <EditProfileItem type='학력' value='고등학교'/>
                <EditProfileItem type='학교' value={user.school}/>
                <Divider/>
                <EditProfileItem type='성격' value='털털한'/>
                <EditProfileItem type='종교' value='무교'/>
                <EditProfileItem type='음주' value='안 함'/>
                <EditProfileItem type='흡연' value='안 함'/>
                <EditProfileItem type='혈액형' value='O형'/>
                <EditProfileItem type='인종' value='한국인'/>
                <Divider/>
                <EditProfileItem type='매력 포인트' multiline placeholder='입력해주세요'/>
                <EditProfileItem type='관심사' multiline placeholder='입력해주세요'/>
                <EditProfileItem type='라이프 스타일' multiline placeholder='입력해주세요'/>
            </ContentBox>
        </Container>
    )
}

export default EditProfile