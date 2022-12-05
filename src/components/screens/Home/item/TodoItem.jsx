import React from 'react'
import Check from './Check'
import { BsTrash } from 'react-icons/bs'

const TodoItem = ({todo, changeTodo,removeTodo}) => {
  return (
    <div className='flex items-center justify-between mb-5 border rounded-xl p-4 bg-gray-800 w-full' >
      <button className='flex items-center'
      onClick={()=> changeTodo(todo._id)}
      >
        <Check isComplited={todo.isComplited}/>
        <span className={`${todo.isComplited ? 'line-through' : ''}`}>{todo.title}</span>
      </button>
      <button onClick={() => removeTodo(todo._id) }>
        <BsTrash size={22} className='text-gray-600 hover:text-gray-300 transition-colors'  />
      </button>
    </div>
  )
}

export default TodoItem