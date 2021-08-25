export interface User {
    username: string
    age: number
    job: string
    region: string
    introduce: string
    height: number
    school: string
    gender: string
    profileImgs?: string[]
    attractive?: string
    hobby?: string
    lifestyle?: string
    birthday?: string
    bodytype?: string
    academicBackground?: string
    bloodType?: string
    religion?: string
    smoke?: string
    drink?: string
    company?: string
    race?: string[]
    personality?: string[]
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