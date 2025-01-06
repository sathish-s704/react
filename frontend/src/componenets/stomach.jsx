import React,{useContext,useState} from 'react';
import {nameContext} from '../App'; 
const Stomach = () => {
    const [color, setColor] = useState('white');
    const [bgcolor, setBgcolor] = useState('black');

    
    const changeColor = () => {
        setBgcolor(bgcolor === 'black' ? 'white' : 'black');
        setColor(color === 'black' ? 'white' : 'black');
    }
    let name=useContext(nameContext);

    return(
        <>
        <div id="stomach" style={{backgroundColor:bgcolor}}>
            <h1  style={{color:color}}>Stomach :{name}</h1>
        </div>
        <button id="mybutton" onClick={changeColor}>Change Colour</button>
        </>
    )
}
export default Stomach;