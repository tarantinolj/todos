import React from 'react'
import { useState } from 'react'
import TodoItem from './item/TodoItem'
import CreateTodoField from './create-todo-field/CreateTodoField'

const data =[
    {
        _id: 'asdasd',
        title: 'Finish the collaboration',
        isComplited: false,
    },
    {
        _id: 'fgasd',
        title: 'Read next chapter of the book',
        isComplited: false,
    },
    {
        _id: 'aghghfs',
        title: 'Finish homework',
        isComplited: false,
    },
    {
        _id: 'assdadda',
        title: 'Upgraid Skills',
        isComplited: false,
    },
]

const Home = () => {

    const[todos, setTodos] = useState(data)

    const changeTodo = (id) =>{
        const copy = [...todos]
        const current = copy.find(t => t._id === id)
        current.isComplited = !current.isComplited
        setTodos(copy)
    }

    const removeTodo = (id) =>{
        setTodos([...todos].filter(t => t._id !== id ))
        console.log(todos)
    }

  return (
    <div className=' text-white  w-4/5 mx-auto'>
        <h1 className='text-2xl font bold text-center mb-4'> Todo for junior</h1>
        {todos.map(todo=> (
        <TodoItem 
        key={todo._id} 
        todo={todo} 
        changeTodo={changeTodo} 
        removeTodo={removeTodo}
        />
        ))}
        <CreateTodoField setTodos={setTodos}/>
        </div>
  )
}

export default Home