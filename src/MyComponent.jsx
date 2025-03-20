import React, {useState} from 'react';

function MyComponent(){
    const[name, setName] = useState("guest");
    const[age, setAge] = useState(0);
    const[isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("christian");
    }
    const updateAge = () => {
        setAge(age +1);
    }
    const assumiLicenzia = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>nome: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>age: {age}</p>
            <button onClick={updateAge}>incrementa età</button>
            <p>is Employed? {isEmployed ? "yes" : "no"}</p>
            <button onClick={assumiLicenzia}>assumi o licenzia</button>
        </div>
    )
}

export default MyComponent