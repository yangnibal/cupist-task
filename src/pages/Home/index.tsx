import React, { useState, ReactElement, JSXElementConstructor } from 'react'
import Layout from '../../components/Layout'
import { Glam, HeaderBox, ListWrapper, HeaderText } from './styles'
import userList from '../../data/userList.json'
import UserItem from '../../components/UserItem'
import { UserItemProps } from '../../models/users'
import BlockModal from '../../components/BlockModal'
import UserProfileItem from '../../components/UserProfileItem'
import Recommend from '../../components/Recommend'

const Home = () => {

    const [ users, setUsers ] = useState<UserItemProps[]>(userList)
    const [ blockModalOn, setBlockModalOn ] = useState<boolean>(false)
    const [ blockUserId, setBlockUserId ] = useState<number | null>(null)

    const handleBlockModal = (id: number) => {
        setBlockUserId(id)
        setBlockModalOn(true)
    }

    const cancelBlock = () => {
        setBlockModalOn(false)
        setBlockUserId(null)
    }

    const blockUser = () => {
        setBlockModalOn(false)
        setUsers(users => users.filter(user => user.id!==blockUserId))
        setBlockUserId(null)
    }

    return (
        <Layout>
            {blockModalOn && <BlockModal onClickBlock={blockUser} onClickCancel={cancelBlock}/>}
            <HeaderBox>
                <Glam>Glam</Glam>
                <HeaderText>근처</HeaderText>
                <HeaderText>라이브</HeaderText>
            </HeaderBox>
            <ListWrapper
                axis='vertical'
                showArrows={false}
                showIndicators={false}
                showStatus={false}
                showThumbs={false}
                autoPlay={false}
                
            >
                <Recommend/>
                {users.filter(user => user.id <= 1).map(user => (
                    <UserItem
                        onClickBlock={() => handleBlockModal(user.id)}
                        {...user}
                        key={user.id} />
                )) as unknown as ReactElement<any, string | JSXElementConstructor<any>>}
                <UserProfileItem
                    onClickShow={() => {}}
                    users={users.filter(user => user.id > 1).map(user => user.user)}
                />
            </ListWrapper>
        </Layout>
    )
}

export default Home