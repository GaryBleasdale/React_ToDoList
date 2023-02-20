import { useState, useRef } from 'react'
import './App.css'

function App() {
  const inputElement = useRef();
  const [items, setItems] = useState([])
  const clickHandler = () => {
    setItems([...items, inputElement.current.value])
    inputElement.current.value = ""
  }


  const removeClickHandler =(e)=>{
     let elementIndex  = parseInt(e.target.attributes.listid.value)
     let deletableElement = items[elementIndex]
      setItems(prevItems => prevItems.filter(item => item!=deletableElement))
  }

  let listItems = items.map((e, i)=>{
    return (
    <li className='flex flex-row' key={i}>
      <p className='pr-6'>{e}</p>
      <span onClick ={removeClickHandler} listid={i}>REMOVE</span>
    </li>
    )
   })

   const handleEnter =(e)=>
   {
    if (e.keyCode === 13) {
      clickHandler();
    }
   }


  return (
    <>
      <div >
        <input type='text' placeholder='Write item here' className='border-2	 border-black	' ref={inputElement} onKeyDown={handleEnter}/>
        <button onClick={clickHandler} >Add item</button>
    </div>
    <ul>
      {listItems}
    </ul>
    </>
    
  )
}

export default App
