//------------LESSON 8------------ counter
// import React, {useState} from 'react';

// function Counter(){
//     const [point, setPoint] = useState(0);

//     const incrementa = () => {
//         setPoint(point+1)
//     }
//     const decrementa = () => {
//         setPoint(point-1)
//     }
//     const reset = () => {
//         setPoint(0)
//     }

//     return(
//         <div>
//             <p className="counter">{point}</p>
//             <button onClick={incrementa} className="counter-button">incrementa</button>
//             <button onClick={decrementa} className="counter-button">decrementa</button>
//             <button onClick={reset} className="counter-button">reset</button>
//         </div>
//     )
// }

// export default Counter



//------------LESSON 10------------ updater function
// è buona norma usare le updater function dentro alle funzioni che settano le useState
// in questo modo: anzichè (point-1) scrivo (p => p - 1)
// in questo modo in caso ci siano più funzioni ne va a cambiare effettivamente il valore che altrimenti
// per come facevamo nelle precedenti rimarrebbe uguale

import React, {useState} from 'react';

function Counter(){
    const [point, setPoint] = useState(0);

// in questo modo non funzionerebbe
    // const incrementa = () => {
    //     setPoint(point + 1)
    //     setPoint(point + 1)
    //     setPoint(point + 1)
    // }
    const incrementa = () => {
        setPoint(p => p + 1)
        setPoint(p => p + 1)
        setPoint(p => p + 1)
    }
    const decrementa = () => {
        setPoint(p => p - 1)
    }
    const reset = () => {
        setPoint(0)
    }

    return(
        <div>
            <p className="counter">{point}</p>
            <button onClick={incrementa} className="counter-button">incrementa</button>
            <button onClick={decrementa} className="counter-button">decrementa</button>
            <button onClick={reset} className="counter-button">reset</button>
        </div>
    )
}

export default Counter