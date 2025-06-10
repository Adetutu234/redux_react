import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from './Button'
import {todoAction} from '../action/action' 
import {v4 as uuidv4} from 'uuid'


const AddTask = () => {
const [description , setDescription]=useState()
const dispatch = useDispatch();

const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()){
      dispatch(todoAction({id:uuidv4(),description,isDone:false}))
      setDescription('')
    }
}

  return (
    <div>
      <form className='flex'onSubmit={handleSubmit} >
        <input
        type='text'
        className='border border-gray-300 outline-0 rounded px-4 py-1 w-[90%] '
        placeholder='Add Todo....'
        value={description}
        onChange={(e)=>setDescription(e.target.value)}>
        </input>
        <Button 
        text={'Add Todo'} 
        className={'px-6 py-1 bg-slate-700 text-white'}
        onClick={handleSubmit}/>
      </form>
    </div>
  )
}

export default AddTask
