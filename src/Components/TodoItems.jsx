import React,{useState} from 'react';
import HighlightOffTwoToneIcon from '@mui/icons-material/HighlightOffTwoTone';

const Todoitems = (props) => {
 const [line,setLine] = useState(false);
 const CutIt = () => {
    setLine(!line);
 };
    return (
        <div>
            
            <li style={{ textDecoration: line ? "line-through" : "none" }} >
                <span onClick={CutIt}>
                    <input type="checkbox" ></input>
                </span>
                {props.text}
                <HighlightOffTwoToneIcon onClick ={() => {
                props.onSelect(props.id);
                }} />
            </li>
        </div>
    );
}

export default Todoitems;
