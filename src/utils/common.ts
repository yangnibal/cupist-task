export const parseUserInfoType = (type: string): string => {
    switch(type){
        case '닉네임':
            return 'username'
        case '키':
            return 'height'
        case '체형':
            return 'bodytype'
        case '종교':
            return 'religion'
        case '학력':
            return 'academicBackground'
        case '음주':
            return 'drink'
        case '흡연':
            return 'smoke'
        case '혈액형':
            return 'bloodType'
        case '성격':
            return 'personality'
        case '인종':
            return 'race'
        default:
            return 'undefined'
    }
}

export const parsePostPosition = (type: string): string => {
    let lastTextCode = type.charCodeAt(type.length - 1)
    if(((lastTextCode - 44032) % 28)===0){
        return `${type}를`
    } else {
        return `${type}을`
    }
}