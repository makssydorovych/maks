const initState = {
    themeId: 1,
}
type StateType = {themeId: number}

export const themeReducer = (state: StateType = initState, action: changeThemeIdAT): StateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}
            

        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id} as const) // fix any
export type changeThemeIdAT = ReturnType<typeof changeThemeId>