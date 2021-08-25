import React, { useState, ReactElement, JSXElementConstructor } from 'react'
import Layout from '../../components/Layout'
import { Glam, HeaderBox, ListWrapper, HeaderText } from './styles'
import userList from '../../data/userList.json'
import UserItem from '../../components/UserItem'
import { UserItemProps } from '../../models/users'
import BlockModal from '../../components/BlockModal'
import UserProfileItem from '../../components/UserProfileItem'
import Recommend from '../../components/Recommend'
import { useEffect } from 'react'

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

    const handleLike = (id: number) => {
        setTimeout(() => {
            setUsers(users => users.filter(user => user.id!==id))
        }, 500)
    }

    return (
        <Layout>
            {blockModalOn && <BlockModal onClickBlock={blockUser} onClickCancel={cancelBlock}/>}
            <HeaderBox>
                <Glam>Glam</Glam>
                <HeaderText>근처</HeaderText>
                <HeaderText>라이브</HeaderText>
            </HeaderBox>
            <ListWrapper>
                {users.filter(user => user.id <= 1).map(user => (
                    <UserItem
                        onClickBlock={() => handleBlockModal(user.id)}
                        onClickLike={() => handleLike(user.id)}
                        {...user}
                        key={user.id} />
                ))}
                <UserProfileItem
                    onClickShow={() => {}}
                    users={users.filter(user => user.id > 1).map(user => user.user)}
                />
                <Recommend/>
            </ListWrapper>
        </Layout>
    )
}

export default Home