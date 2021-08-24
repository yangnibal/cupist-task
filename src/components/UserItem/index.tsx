import React, { useState } from 'react'
import { UserItemProps } from '../../models/users'
import { Container, ProfileImg, RecommendBox, UserInfoBox, ButtonBox, BlockButton, LikeButton, SuperLikeButton, Username, Introduce, ProfileBox, Job, Height, HeartIconBox } from './styles'
import { BsStarFill, BsX } from 'react-icons/bs'
import { AiFillHeart } from 'react-icons/ai'

interface Props extends UserItemProps {
    onClickBlock: () => void
    onClickLike: () => void
}

const HEART_ICON_SIZE = 70

const UserItem: React.FC<Props> = ({
    user, isRecommend, isBlocked, isLiked, onClickBlock, onClickLike
}) => {

    const [ showLike, setShowLike ] = useState<boolean>(false)

    const handleLike = () => {
        setShowLike(true)
        onClickLike()
    }

    return (
        <Container>
            {showLike && (
                <HeartIconBox>
                    <AiFillHeart size={HEART_ICON_SIZE} color='#ffffff'/>
                </HeartIconBox>
            )}
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
                    <BlockButton onClick={onClickBlock}>
                        <BsX color='#ffffff' size={32}/>
                    </BlockButton>
                    <LikeButton onClick={handleLike}>좋아요</LikeButton>
                    <SuperLikeButton>
                        <BsStarFill color='#ffffff' size={22}/>
                    </SuperLikeButton>
                </ButtonBox>
            </UserInfoBox>
        </Container>
    )
}

export default UserItem