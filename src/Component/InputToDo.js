import React, { useState } from 'react'

function InputToDo(props) {
    const [inputText, setinputtext] = useState("")
    const handleEnterKeyPress  =(e)=>{
        if(e.keyCode===13){
            props.addlist(inputText);
    setinputtext("");
        }

    }

  return (
    <div className=' input-container'>
   <input type ="text" className='inputlist' 
    placeholder='enter the list ' 
    value ={inputText}
    onChange={e =>{
        setinputtext(e.target.value)
        
      }}
      onKeyDown = {handleEnterKeyPress}
      ></input>
  
  
  
   <button className='add-btn' onClick={()=>{
    props.addlist(inputText);
    setinputtext("");
   }}>+</button>
   
   
    </div>
  )
}

export default InputToDo