const initState = {
    themeId: 1,
}
type StateType = {
    themeId: number;
};

type ActionType = {
    type: 'SET_THEME_ID';
    id: number;
};

export const themeReducer = (state: StateType = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}


        default:
            return state
    }

};


export const changeTheme = (id: number) => ({ type: 'SET_THEME_ID', id} as const) // fix any