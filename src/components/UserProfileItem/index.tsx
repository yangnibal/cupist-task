import React from 'react'
import { User } from '../../models/users'
import { Button, Container, Item, Job, ProfileImg, Region, UserInfoBox, Username } from './styles'

interface Props {
    onClickShow: () => void
    users: User[]
}

const UserProfileItem: React.FC<Props> = ({
    onClickShow, users
}) => {
    return (
        <Container>
            {users.map((user, index) => (
                <Item key={index}>
                    <ProfileImg src={user.profileImg}/>
                    <UserInfoBox>
                        <Username>{user.username}, {user.age}</Username>
                        <Job>{user.job}</Job>
                        <Region>{user.region}</Region>
                        <Button onClick={onClickShow}>보기</Button>
                    </UserInfoBox>
                </Item>
            ))}
        </Container>
    )
}

export default UserProfileItem