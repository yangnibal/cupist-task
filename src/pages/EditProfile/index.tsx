import React from 'react'
import { Container, HeaderBox, Title, ContentBox, Divider, ProfileImgBox, ImgDesc, ProfileImgItem, EmptyProfileImgItemBox, EmptyProfileImgItem } from './styles'
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
            <ProfileImgBox>
                {[0, 1, 2, 3, 4, 5].map(index => myInfo.profileImgs[index] ? (
                    <ProfileImgItem src={myInfo.profileImgs[index]} key={index}/>
                ) : (
                    <EmptyProfileImgItemBox key={index}>
                        <EmptyProfileImgItem/>
                    </EmptyProfileImgItemBox>
                ))}
            </ProfileImgBox>
            <ImgDesc>다양한 매력을 보여줄 수 있는 사진을 올려주세요 <b>더 알아보기</b></ImgDesc>
            <ContentBox>
                <Divider/>
                <EditProfileItem type='닉네임' value={myInfo.username}/>
                <EditProfileItem type='성별' value={myInfo.gender} editable={false}/>
                <EditProfileItem type='생일' value='2002-02-12'/>
                <EditProfileItem type='위치' value={myInfo.region}/>
                <Divider/>
                <EditProfileItem type='소개' value={myInfo.introduce} multiline placeholder='회원님의 매력을 간단하게 소개해주세요'/>
                <Divider/>
                <EditProfileItem type='키' value={String(myInfo.height)}/>
                <EditProfileItem type='체형' value='보통'/>
                <Divider/>
                <EditProfileItem type='직장' value=''/>
                <EditProfileItem type='직업' value={myInfo.job}/>
                <EditProfileItem type='학력' value='고등학교'/>
                <EditProfileItem type='학교' value={myInfo.school}/>
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