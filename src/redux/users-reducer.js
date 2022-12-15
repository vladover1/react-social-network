const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    users: [{
        id: 1,
        photoURL: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Faws.amazon.com%2Fdeveloper%2Fcommunity%2Fheroes%2Fvlad-ionescu%2F&psig=AOvVaw3kIgUUcMPOjpHOHZvy00ZA&ust=1671221980558000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCJypa5_PsCFQAAAAAdAAAAABAU',
        followed: false,
        fullName: 'Vlad O.',
        status: 'i am a boss',
        location: {city: 'Kiev', country: 'Ukraine'}
    }, {
        id: 2,
        photoURL: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Faws.amazon.com%2Fdeveloper%2Fcommunity%2Fheroes%2Fvlad-ionescu%2F&psig=AOvVaw3kIgUUcMPOjpHOHZvy00ZA&ust=1671221980558000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCJypa5_PsCFQAAAAAdAAAAABAU',
        followed: true,
        fullName: 'Nastya M.',
        status: 'i am a boss too',
        location: {city: 'Kharkiv', country: 'Ukraine'}
    }, {
        id: 3,
        photoURL: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Faws.amazon.com%2Fdeveloper%2Fcommunity%2Fheroes%2Fvlad-ionescu%2F&psig=AOvVaw3kIgUUcMPOjpHOHZvy00ZA&ust=1671221980558000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCJypa5_PsCFQAAAAAdAAAAABAU',
        followed: false,
        fullName: 'Volodya K.',
        status: 'i am a boss too',
        location: {city: 'Lviv', country: 'Ukraine'}
    },]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        default:
            return {}
    }
}

export const followAC = (userId) => ({type: 'FOLLOW', userId})
export const unfollowAC = (userId) => ({type: 'UNFOLLOW', userId})
export const setUsersAC = (users) => ({type: 'SET_USERS', users})

export default usersReducer