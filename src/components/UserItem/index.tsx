import React from 'react'
import { UserItemProps } from '../../models/users'
import { Container, ProfileImg, RecommendBox, UserInfoBox, ButtonBox, BlockButton, LikeButton, SuperLikeButton, Username, Introduce, ProfileBox, Job, Height } from './styles'
import { BsStarFill, BsX } from 'react-icons/bs'

interface Props extends UserItemProps {

}

const UserItem: React.FC<Props> = ({
    user, isRecommend, isBlocked, isLiked
}) => {
    return (
        <Container>
            <ProfileImg src={user.profileImg}/>
            <UserInfoBox>
                {isRecommend && <RecommendBox>오늘의 추천</RecommendBox>}
                <Username>{user.username}, {user.age}</Username>
                {user.introduce==='' ? (
                    <ProfileBox>
                        <Job>{user.job} · {user.region}</Job>
                        <Height>{user.height} · {user.school}</Height>
                    </ProfileBox>
                ) : (
                    <Introduce>{user.introduce}</Introduce>
                )}
                <ButtonBox>
                    <BlockButton>
                        <BsX color='#ffffff' size={32}/>
                    </BlockButton>
                    <LikeButton>좋아요</LikeButton>
                    <SuperLikeButton>
                        <BsStarFill color='#ffffff' size={22}/>
                    </SuperLikeButton>
                </ButtonBox>
            </UserInfoBox>
        </Container>
    )
}

export default UserItem