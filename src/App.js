import logo from './logo.svg';
import './App.css';
import InputToDo from './Component/InputToDo';
import ToDoList from './Component/ToDoList';

import { useState } from 'react';

function App() {
  const [listToDo, setListToDo] = useState([ ]);
  let addlist = (inputText)=>{
    if(inputText  !=="")
    setListToDo([...listToDo, inputText])}

    const deletListItem =(key) =>{
      const newlist = ([...listToDo])
      newlist.splice(key,1);
      setListToDo([...newlist])
    }

  return (
<div className='main-container'>
    <div className='center-container'>
    <InputToDo addlist ={addlist}/>
    <h1 className="app-heading">TODO</h1>
    <hr/>
     {listToDo.map((listItem,i)=>{
      return(
        <ToDoList key ={i} index={i} item ={listItem} deleteItem = {deletListItem}/>
      )
     })}
   


    </div>

    </div>
  );
}

export default App;
