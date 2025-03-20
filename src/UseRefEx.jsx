// useState() = Re-renders the component when the state value changes

// useRef() = "Use Reference" Does not cause re-renders when its value changes.
                // 1. Accessing/Interacting with DOM elements
                // 2. Handling Focus, Animations, and Transitions
                // 3. Managing Timers and Intervals

import React,{useState, useEffect, useRef} from "react"


//utilizzando useRef() abbiamo fatto si che i componenti cambiano colore ma senza reindirizzare mai la pagina 
function UseRefEx(){
    
    //in questo modo ad ogni click avviene il reindirizzamento del componente
    // let [number, setNumber] = useState(0);

    //aggiungendo l'useRef() si evita che la paggina venga reindirizzata ogni volta
    //la ref ha un parametro oggetto chiamato current che viene inizializzato dal valore nelle parentesi
    //  e può memorizzare un valore(che sia intero, stringa, oggetto o array)
    // const ref = useRef(0);
    const inputRef1= useRef(null)
    const inputRef2= useRef(null)
    const inputRef3= useRef(null)

    useEffect(() => {
        console.log("reindirizzamento componente");
    })

    function catturaClick1(){
        //setNumber(n => n + 1);
        // ref.current++;

        //in questo caso il componente diventa giallo e con contorno ma senza reindirizzare la pagina
        inputRef1.current.focus();
        inputRef1.current.style.background = "yellow"
        inputRef2.current.style.background = ""
        inputRef3.current.style.background = ""
    }
    function catturaClick2(){
        inputRef2.current.focus();
        inputRef2.current.style.background = "yellow"
        inputRef1.current.style.background = ""
        inputRef3.current.style.background = ""
    }
    function catturaClick3(){
        inputRef3.current.focus();
        inputRef3.current.style.background = "yellow"
        inputRef1.current.style.background = ""
        inputRef2.current.style.background = ""
    }

    return(
        <div>
            <button onClick={catturaClick1}>
                Click me 1!
            </button>
           {/*la variabile ref crea una referenza tra la useRef e l'elemento input*/}
            <input ref={inputRef1} />
            <button onClick={catturaClick2}>
                Click me 2! 
            </button>
           {/*la variabile ref crea una referenza tra la useRef e l'elemento input*/}
            <input ref={inputRef2} />
            <button onClick={catturaClick3}>
                Click me 3!
            </button>
           {/*la variabile ref crea una referenza tra la useRef e l'elemento input*/}
            <input ref={inputRef3} />
        </div>
    )
}

export default UseRefEx