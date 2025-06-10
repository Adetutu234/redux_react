import React, { useState } from 'react'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { editTodo, removeTodo, toggleTodo } from '../action/action';

const Task = ({id,description,isDone}) => {
  const dispatch = useDispatch();
  const [edit , setEdit]= useState(false);
  const [update, setUpdate]= useState(description)

  const handleEdit = () =>{
    if (update.trim()){
      dispatch(editTodo(id ,update))
      setEdit(false);
    }
  }
  return (
    <div className='flex items-center justify-between bg-white px-3 py-1 border rounded mb-2 mt-2'>
      {edit ? (
        <input
          type='text'
          value={update}
          onChange={(e) => setUpdate(e.target.value)}
          className='outline-none px-2 py-1 rounded w-full mr-4'
        />
      ):(
        <span 
            className={`flex-1 ${isDone ? 'line-through text-gray-400' : ''}`}>
          {description}
        </span>
      )}
      <div className='flex gap-1 ml-1'>
          <Button text={edit ? 'Save': 'Edit'} className={'text-sm bg-purple-600 px-2 py-1 rounded hover:underline text-white'} onClick={()=>(edit ? handleEdit() : setEdit(true))}/>
          <Button text={isDone ? 'Undo': 'Done'} className={'text-sm bg-green-600 px-2 py-1 rounded hover:underline '} onClick={()=>dispatch(toggleTodo(id))}/>
          <Button text={'Trash'} className={'bg-red-700 px-2 py-1 rounded hover:underline'} onClick={()=>dispatch(removeTodo(id))}/>
      </div>
      </div>
    )
}
export default Task
