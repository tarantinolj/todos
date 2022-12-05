import React, {useState} from 'react'

const CreateTodoField = ({setTodos}) => {
    const [title, setTitle] = useState('');

    const addTodo = (title) =>{
        setTodos( prev => [
        {
           _id : new Date(),
           title,
           isComplited: false,
        },
        ...prev,
    ])
    setTitle('')
    }
  return (
    <div className='flex items-center justify-between mb-5 rounded-xl py-3 px-5 border-gray-800 border-2 w-full mt-20'>
        <input 
        type="text"
        onChange={e=> setTitle(e.target.value)} 
        value={title}
        onKeyPress={e=>e.key === 'Enter' && addTodo(title)}
        className='bg-transparent w-full border-none outline-none'
        placeholder='Add a task and Press Enter'
        />
    </div>
  )
}

export default CreateTodoField