import React,{useState,useEffect} from 'react'
import Todoitems from './TodoItems';
import TextField from '@mui/material/TextField';
import AddCircleOutlineSharpIcon from '@mui/icons-material/AddCircleOutlineSharp';

const getLocalItems = () =>{
    let list =localStorage.getItem('lists');
    console.log(list)
    if(list){
        return JSON.parse(list);
    } else{
        return [];
    }
}
function AddTodo() {
    const [list,setList] = useState("");
    const [items,setItems] = useState( getLocalItems());

    const TaskEvent = (e) => {
        setList(e.target.value);
    };

    const AddtoList = () => {
        setItems((oldItems) =>{
            return [...oldItems,list]
        })
    setList("")
    };
    const deleteItems = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((val,index) => {
                return index !== id
            });
        });
    };
    useEffect(() => {
        localStorage.setItem('lists', JSON.stringify(items))
    },[items]);

  return (
    <div className='Todocontainer'>
      <h2>Add New Todo</h2>
      <TextField id="standard-basic" variant="standard" label='Add New Task' onChange={TaskEvent} />
      <AddCircleOutlineSharpIcon onClick={AddtoList}/>
      
         {
         items.map((interval,index) => {
             return <Todoitems key={index} id={index} text ={interval} onSelect = {deleteItems}
             />
         })
         } 
    
    </div>
  )
}

export default AddTodo
