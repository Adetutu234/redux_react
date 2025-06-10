const initialState = {
    todos: [],
    filter: 'ALL' // or 'DONE' , 'NOT_DONE'
}
export const todoReducer = (state = initialState,action)=>{
    switch (action.type){
        case 'addTodo':
            return {...state,todos:[...state.todos,action.payload]}
        case 'REMOVE_TODO':
            return {...state,todos: state.todos.filter(todo => todo.id !== action.payload)}
        case 'TOGGLE_TODO':
            return {...state,todos: state.todos.map(todo => todo.id === action.payload ? {...todo, isDone:!todo.isDone} : todo)}
        case 'EDIT_TODO':
            return {...state,todos: state.todos.map(todo=>todo.id === action.payload ? {...todo,description: action.payload.description} :todo)}
        case 'FILTER_TODO':
            return {...state,filter: action.payload}
        default:
            return state;
    }
}
