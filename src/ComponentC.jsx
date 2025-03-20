import React,{useContext} from "react"
import { UserContext } from "./ComponentA"

import ComponentD from './ComponentD.jsx';

function ComponentC (){

const user = useContext(UserContext);

    return( 
        <div className='box'>
            <h1>Componenente C</h1>
            <h2>{`hello again ${user}`}</h2>
            <ComponentD/>
        </div>
    )
}

export default ComponentC