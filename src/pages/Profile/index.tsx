import React from 'react'
import Layout from '../../components/Layout'
import { ContentBox, Divider, EditButton, HeaderBox, Job, ProfileBox, ProfileImg, UserInfoBox, Username } from './styles'
import { BsGearFill } from 'react-icons/bs'
import ProfileItem from '../../components/ProfileItem'
import { RiVipDiamondFill, RiStoreFill, RiShieldFill, RiUserAddFill } from 'react-icons/ri'
import { useHistory } from 'react-router-dom'
import { PATHS } from '../../constants/paths'
import { useRecoilValue } from 'recoil'
import { userInfoAtom } from '../../store/users'

const ICON_SIZE = 18

const Profile = () => {

    const history = useHistory()

    const userInfo = useRecoilValue(userInfoAtom)

    return (
        <Layout>
            <HeaderBox>
                <BsGearFill size={22}/>
            </HeaderBox>
            <ContentBox>
                <UserInfoBox>
                    <ProfileImg src={userInfo.profileImgs?.[0]}/>
                    <ProfileBox>
                        <Username>{userInfo.username}, {userInfo.age}</Username>
                        <Job>{userInfo.job} · {userInfo.region}</Job>
                        <EditButton onClick={() => history.push(PATHS.PROFILE + PATHS.EDIT)}>프로필 수정</EditButton>
                    </ProfileBox>
                </UserInfoBox>
                <ProfileItem icon={<RiVipDiamondFill size={ICON_SIZE} color='red'/>} value='프로필 티어'/>
                <ProfileItem icon={<RiStoreFill size={ICON_SIZE} color='orange'/>} value='스토어'/>
                <ProfileItem icon={<RiShieldFill size={ICON_SIZE} color='green'/>} value='지인 차단'/>
                <ProfileItem icon={<RiUserAddFill size={ICON_SIZE}/>} value='친구 초대'/>
                <Divider/>
                <ProfileItem value='보낸 좋아요 목록'/>
                <ProfileItem value='고객 센터'/>
            </ContentBox>
        </Layout>
    )
}

export default Profile