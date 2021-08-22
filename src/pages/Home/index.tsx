import React from 'react'
import Layout from '../../components/Layout'
import { Glam, HeaderBox, ListWrapper } from './styles'
import userList from '../../data/userList.json'
import UserItem from '../../components/UserItem'
import { Settings } from 'react-slick'

const sliderSettings: Settings = {
    dots: false,
    speed: 500,
    slidesToScroll: 1,
    infinite: false,
    arrows: false,
    vertical: true
}

const Home = () => {
    return (
        <Layout>
            <HeaderBox>
                <Glam>Glam</Glam>
            </HeaderBox>
            <ListWrapper {...sliderSettings}>
                {userList.map(user => (
                    <UserItem
                        {...user}
                        key={user.id}
                    />
                ))}
            </ListWrapper>
        </Layout>
    )
}

export default Home