import {UserType} from "../HW8";

export const homeWorkReducer = (state: Array<UserType>, action: ActionsType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort': {
            return [...state].sort((a, b) => {
                switch (action.payload) {
                    case 'up':
                        return a.name.localeCompare(b.name)
                    case 'down':
                        return b.name.localeCompare(a.name)
                    default:
                        return 0
                }
            })
        }
        case 'check': {
            // need to fix
            return state.filter(p => p.age >= action.payload)
        }
        default:
            return state
    }
}

export type ActionsType = sortActionType | checkActionType

type sortActionType = {
    type: 'sort'
    payload: 'up' | 'down'
}
type checkActionType = {
    type: 'check'
    payload: number
}


export const sortAC = (type: 'sort', payload: 'up' | 'down'): ActionsType => ({
    type,
    payload
})

export const checkAC = (type: 'check', payload: number): ActionsType => ({
    type,
    payload
})

