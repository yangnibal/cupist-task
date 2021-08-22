import React from 'react'
import { Container, HeaderBox, Title, ContentBox, Divider } from './styles'
import { BsX } from 'react-icons/bs'
import { useHistory } from 'react-router-dom'
import EditProfileItem from '../../components/EditProfileItem'
import myInfo from '../../data/myInfo.json'

const EditProfile = () => {

    const history = useHistory()

    return (
        <Container>
            <HeaderBox>
                <BsX size={30} onClick={() => history.goBack()}/>
                <Title>프로필 수정</Title>
                <BsX size={30} color='#ffffff'/>
            </HeaderBox>
            <ContentBox>
                <EditProfileItem type='닉네임' value={myInfo.username} editable/>
                <EditProfileItem type='성별' value={myInfo.gender} editable={false}/>
                <EditProfileItem type='생일' value='2002-02-12' editable/>
                <EditProfileItem type='위치' value={myInfo.region} editable/>
                <Divider/>
                <EditProfileItem type='소개' value={myInfo.introduce} editable/>
                <Divider/>
                <EditProfileItem type='키' value={String(myInfo.height)} editable/>
                <EditProfileItem type='체형' value='보통' editable/>
                <Divider/>
                <EditProfileItem type='직장' value='' editable/>
                <EditProfileItem type='직업' value={myInfo.job} editable/>
                <EditProfileItem type='학력' value='고등학교' editable/>
                <EditProfileItem type='학교' value={myInfo.school} editable/>
                <Divider/>
                <EditProfileItem type='성격' value='털털한' editable/>
                <EditProfileItem type='종교' value='무교' editable/>
                <EditProfileItem type='음주' value='안 함' editable/>
                <EditProfileItem type='흡연' value='안 함' editable/>
                <EditProfileItem type='혈액형' value='O형' editable/>
                <EditProfileItem type='인종' value='한국인' editable/>
            </ContentBox>
        </Container>
    )
}

export default EditProfile