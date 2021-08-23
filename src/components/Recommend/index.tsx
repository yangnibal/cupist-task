import React from 'react'
import { Container, Title, Button } from './styles'
import RecommendItem from '../RecommendItem'
import { FaCalendar, FaArrowUp } from 'react-icons/fa'
import { RiVipDiamondFill } from 'react-icons/ri'
import { ImWoman } from 'react-icons/im'
import { IoLogoGameControllerA } from 'react-icons/io'
import { GiBasketballBall } from 'react-icons/gi'
import { BiBible } from 'react-icons/bi'

const Recommend = () => {
    return (
        <Container>
            <Title>맞춤 추천</Title>
            <RecommendItem icon={<FaCalendar color='purple'/>} value='글램 추천'/>
            <RecommendItem icon={<RiVipDiamondFill color='skyblue'/>} value='최상위 매력'/>
            <RecommendItem icon={<ImWoman color='orange'/>} value='볼륨감 있는 체형'/>
            <RecommendItem icon={<IoLogoGameControllerA color='purple'/>} value='게임 좋아하는'/>
            <RecommendItem icon={<GiBasketballBall color='purple'/>} value='스포츠 관람을 즐기는'/>
            <RecommendItem icon={<BiBible color='gray'/>} value='종교가 기독교인'/>
            <RecommendItem icon={<FaArrowUp color='gray'/>} value='166cm 이상'/>
            <Button>25개 항목 모두 보기</Button>
        </Container>
    )
}

export default Recommend