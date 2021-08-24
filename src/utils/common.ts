export const parseUserInfoType = (type: string): string => {
    switch(type){
        case '닉네임':
            return 'username'
        default:
            return 'undefined'
    }
}