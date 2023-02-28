const initState = {
    themeId: "1",
}
type StateType = {
    themeId: string;
};

type ActionType = {
    type: 'SET_THEME_ID';
    id: string;
};

export const themeReducer = (state: StateType = initState, action: ActionType): StateType => { // fix any
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId: action.id}


        default:
            return state
    }

};


export const changeTheme = (id: string) => ({ type: 'SET_THEME_ID', id} as const) // fix any