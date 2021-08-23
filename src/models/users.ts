export interface User {
    username: string
    age: number
    job: string
    region: string
    introduce: string
    height: number
    school: string
    gender: string
    profileImg: string
}

export enum UserItemEnumType {
    DEFAULT = 'DEFAULT',
    PROFILE = 'PROFILE',
    BOOST = 'BOOST',
    RECOMMEND = 'RECOMMEND',
    VALUATION = 'VALUATION'
}

export interface UserItemProps {
    user: User
    isRecommend: boolean
    isBlocked: boolean
    isLiked: boolean
    id: number
    type: string
}