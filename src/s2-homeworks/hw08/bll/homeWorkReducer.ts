import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }


export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            const newState = [...state].sort((a: UserType, b: UserType) => {
                if (a.name > b.name) return 1
                if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'up'? newState : newState.reverse()// need to fix
        }
        case 'check': {

            return state.filter(s => s.age >= action.payload) // need to fix
        }
        default:
            return state
    }
}
