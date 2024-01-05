
const initialState = {
    count : 1,
    list : [{id: 1, task : "First Task"},{id : 2, task : "Second Task"}],
    editTodo : null,
    theme : false, //true for darkMode and false for lightMode
    completed : []
}

export const todoReducer = (state = initialState, action) => {

    switch (action.types) {
        case "add" :
            return {
                ...state,
                list : [
                    {
                        id : state.count,
                        task : action.payload
                    },
                    ...state.list
                ],
                count : state.count++
            }    
            

        case "remove" : //The item to remove could be in the list array or in the completed array as well we need to handle both cases
            
            //Checking that the todo task on which the remove button is clicked is in the completed array or the list array and then remooving it from there accordingly
            const inListArray = state.list.some((todo) => todo.id === action.payload.id)
            const inCompletedArray = state.completed.some((todo) => todo.id === action.payload.id);
        
            if(inListArray){
                return {
                    ...state,
                    list : state.list.filter( (todo) => {
                        return todo.id !== action.payload.id   //On Clicking the delete button we are sending the todo object as the parameter to the action creator
                    })
                }
            }
            if(inCompletedArray) {
                return {
                    ...state,
                    completed : state.completed.filter((todo) => {
                                return todo.id !== action.payload.id
                    })
                }
            }


            break;
            
            

        case "theme":
                return {
                    ...state,
                    theme : !state.theme
                }

        case "complete":
            const inList = state.list.some((todo) => todo.id === action.payload.id);
            const inCompleted = state.completed.some((todo) => todo.id === action.payload.id);

            if(inList){
                return {
                    ...state,
                    list : state.list.filter((todo) => todo.id !== action.payload.id),
                    completed : [
                        state.completed,
                        action.payload
                    ]
                }
            }
            if(inCompleted) {
                return{
                    ...state,
                    completed : state.completed((todo) => todo.id  !== action.payload.id),
                    list : [
                        ...state.list,
                        action.payload
                    ]
                }
            }
        break;
        case "edit" :
            return{
                ...state,
                editTodo : action.payload
            }



            return state;

        default : 
            return state;
    }

        return state;
}