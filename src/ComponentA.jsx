import React,{useState, createContext} from 'react';
import ComponentB from './ComponentB.jsx';

export const UserContext= createContext()

function ComponentA (){
    const[user,setUser] = useState("chri")

    return( 
        <div className='box'>
            <h1>Componenente A</h1>
            <h2>{`hello ${user}`}</h2>
            <UserContext.Provider value = {user}>
                <ComponentB user={user}/>
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA