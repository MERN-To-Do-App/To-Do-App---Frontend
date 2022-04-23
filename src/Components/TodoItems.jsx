import React,{useState} from 'react';

const Todoitems = (props) => {
 const [line,setLine] = useState(false);
 const CutIt = (e) => {
    setLine(!line);
    props.deleteItems(e.target.value)
 };
    return (
        <div>
            
            <li className='item' style={{ textDecoration: line ? "line-through" : "none" }} >
                <span onClick={CutIt}>
                    <input className='check-box' type="checkbox" value={props.id} ></input>
                </span>
                <p className="item-text">{props.text}</p>
                
            </li>
        </div>
    );
}

export default Todoitems;
