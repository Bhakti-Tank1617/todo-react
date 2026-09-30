import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
    <Navbar/>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[90vh]">
          <div className="addtodo">
            <h2 className='text-lg font-bold'>Add a Todo</h2>
            <input type="text" />
            <button>Add</button>
          </div>
        <h2 className='text-lg font-bold '> Your Todos</h2>
        <div className="todos"></div>
        <div className="todo flex">
          <div className="text"> Lorem ipsum dolor sit amet consectetur adipisicing.</div>
            <div className="buttons"></div>
            <button>Edit</button>
            <button>Delete</button>
            </div>     
             
        </div>
      
    </>
  )
}

export default App
