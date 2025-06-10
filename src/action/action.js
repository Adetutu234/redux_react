export const todoAction = (todo) =>{
    return {
        type: 'addTodo',
        payload: todo
    }}
    
export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  payload: id
});

export const removeTodo = (id) => ({
  type: 'REMOVE_TODO',
  payload: id,
});

export const editTodo = (id, description) => ({
  type: 'EDIT_TODO',
  payload: { id, description }
});

export const filterTodos = (filter) => ({
  type: 'FILTER_TODOS',
  payload: filter
});