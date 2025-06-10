import React, { useState } from 'react'
import Task from './Task'
import { useSelector } from 'react-redux'
import Button from './Button'

const ListTask = () => {
  const [filter,setFilter] = useState('all')
  const tasks = useSelector((state)=> state.todos);

  const filteredTasks = tasks.filter((task)=>
    filter === 'all' ? true : filter === 'done' ? task.isDone : !task.isDone
  )
  return (
    <div>
        <div className='flex gap-3'>
          <Button text={'All'} className={'text-sm bg-blue-600 px-2 py-1 rounded hover:underline text-white'} onClick={()=>setFilter('all')}/>
          <Button text={'Done'} className={'text-sm bg-green-600 px-2 py-1 rounded hover:underline text-white'} onClick={()=>setFilter('done')}/>
          <Button text={'Not Done'} className={'text-sm bg-red-600 px-2 py-1 rounded hover:underline text-white'} onClick={()=>setFilter('not')}/>
        </div>

        {filteredTasks.map((task)=>(
        <Task key={task.id} {...task}/>
      ))}
    </div>
  )
}

export default ListTask
