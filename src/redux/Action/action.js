import { ACTION_TYPES } from "../../App"

export const add = (input) => {
    return {
        type : ACTION_TYPES.ADD,
        payload : input
    }
}

export const remove = (index) => {
    return {
        type : ACTION_TYPES.REMOVE,
        payload : index
    }
}

export const edit = (item, index) => {
    return {
        type: ACTION_TYPES.EDIT,
        payload : item,
        index: index
    }
}

export const complete = (item, index) => {
    return {
        type : ACTION_TYPES.COMPLETE,
        payload : item,
        index: index
    }
}

export const theme = () => {
    return {
        type: ACTION_TYPES.THEME
    }
}