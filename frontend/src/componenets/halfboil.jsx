import React from "react";
import Stomach from "./stomach";
const Halfboil = ({need}) => {    
    return(
        <div>
            <h1>Halfboil</h1>
            <Stomach need={need}/>
        </div>
    )
}
export default Halfboil;