import { useState } from 'react'
import Navbar from './components/Navbar'

function App() {
  const handleEdit = () => {
    
  }

  const handleDelete = () => {
    
  }

  const handleAdd = () => {
    
  }
  
  
  
  

  return (
    <>
    <Navbar/>
      <div className="container mx-auto my-5 rounded-xl p-5 bg-violet-100 min-h-[90vh]">
          <div className="addtodo">
            <h2 className='text-lg font-bold my-2'>Add a Todo</h2>
            <input type="text" className='w-1/2' />
            <button className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-sm text-white font-bold rounded-md mx-6'>Add</button>
          </div>
        <h2 className='text-lg font-bold '> Your Todos</h2>
        <div className="todos"></div>
        <div className="todo flex">
          <div className="text"> Lorem ipsum dolor sit amet consectetur adipisicing.</div>
            <div className="buttons"></div>
            <button onClick={handleEdit} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-sm text-white font-bold rounded-md mx-1'>Edit</button>
            <button  onClick={handleDelete} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-sm text-white font-bold rounded-md mx-1' >Delete</button>
            </div>     
             
        </div>
      
    </>
  )
}

export default App
