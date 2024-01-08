

const themeState = {
    theme : false
}


export const themeReducer = (state = themeState, action) => {
    switch(action.type) {
        case "theme" : 
            return {
                theme : !state.theme
            }
        default:
            return state;
    }
}