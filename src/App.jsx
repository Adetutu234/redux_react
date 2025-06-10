import React from 'react'
import Task from './components/Task'
import AddTask from './components/AddTask'
import ListTask from './components/ListTask'


const App = () => {
  return (
    <div className='p-10 space-y-5'>
      <AddTask />
      <ListTask />
    </div>
  )
}

export default App
