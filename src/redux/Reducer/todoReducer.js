
const initialState = {
    count : 1,
    list : [],
    editTodo : "",
    theme : false, //true for darkMode and false for lightMode
    completed : ["HEHEHE"]
}



export const todoReducer = (state = initialState, action) => {

    switch (action.types) {
        case "add" :
            if(state.editTodo){
                const editTodoObj = state.list.filter( (todo) => todo.id === state.editTodo.id);
                const list = state.list.filter( (todo) => todo.id !== state.list.id)
                return {
                    list : [
                        {
                            ...editTodoObj,
                            task : action.payload
                        },
                        ...list
                    ],
                    ...state
                }
            }
            return {
                list : [
                    {
                        id : state.count,
                        task : action.payload
                    },
                    ...state.list
                ],
                ...state,                
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

        default : 
            return state;
    }
}





// const initialData = {
//     list : []
// }

// export const todoReducer = (state = initialData, action) => {
//     switch(action.type) {
//         case "ADD":
//             const {id, data} = action.payload;
//             return {
//                 ...state,
//                 list : [
//                     ...state.list,
//                     {
//                         id: id,
//                         data: data
//                     }
//                 ]
//             }
//         break;
//         default:
//             console.log("executing");
//             return state;
//     }
// }

// // export default todoReducer;