import React from "react";  
import Egg from "./egg";
const Hen = ({need}) => {   
    return(
        <div>
            <h1>Hen </h1>
            <Egg  need={need}/>
        </div>
    )
}
export default Hen;