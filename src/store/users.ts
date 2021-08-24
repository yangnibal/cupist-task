import { atom } from 'recoil'
import myInfo from '../data/myInfo.json'
import { User } from '../models/users'

export const userInfoAtom = atom({
    key: 'userInfo',
    default: myInfo as Partial<User>
})