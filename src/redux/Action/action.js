import { ACTION_TYPES } from "../../App"

export const add = (input) => {
    return {
        type : ACTION_TYPES.ADD,
        payload : input
    }
}

export const remove = (todo) => {
    return {
        type : ACTION_TYPES.REMOVE,
        payload : todo
    }
}

export const edit = (todo) => {
    return {
        type: ACTION_TYPES.EDIT,
        payload : todo
    }
}

export const complete = (todo) => {
    return {
        type : ACTION_TYPES.COMPLETE,
        payload : todo
        
    }
}

export const theme = () => {
    return {
        type: ACTION_TYPES.THEME
    }
}