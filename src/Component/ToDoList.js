import React from 'react'

function ToDoList(props) {
  return (
    <div>
 <li className="list-item">
{props.item}
    <spam className="icons">
    <i className="fa-sharp fa-solid fa-trash icon-delete" 
    onClick={(e)=>{
        props.deleteItem(props.index)
    }}></i>
    </spam>
 </li>

    </div>
  )
}

export default ToDoList;