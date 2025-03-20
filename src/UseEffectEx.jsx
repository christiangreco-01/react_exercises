
// 1. useEffect(() => {}) // Runs after every re-render
// 2. useEffect (() => {}, []) // Runs only on mount
// 3. useEffect (() => {}, [value]) // Runs on mount + when value changes

import React, {useState,useEffect} from "react";

function UseEffectEx(){
//     const[count, setCount] = useState(0);
//     const[color, setColor] = useState("green");

    //cambia il titolo della pagina al cambiare del contatore
    // useEffect(() => {
    //     document.title = `count: ${count}`  
    // })

    //cambia il titolo della pagina solo appena viene montato il contatore (ho aggiunto le parentesi quadre come secondo parametro)
    // useEffect(() => {
    //     document.title = `my counter program`  
    // },[])
    
    // //cambia nel momento in cui viene montato il contatore e anche nel momento in cui cambia il valore della variabile count
    //ma non camba la scritta quando cambia solo il colore
    // useEffect(() => {
    //     document.title = `count: ${count} ${color}`  
    // },[count])

    //per questo motivo devo aggiungere color alle dipendenza
    // useEffect(() => {
    //     document.title = `count: ${count} ${color}`  

    //     return() => {
    //         //clean up code
    //     }
    // },[count, color])


    // function addToCount(){
    //     setCount(c => c +1)
    // }
    // function subtract(){
    //     setCount(c => c -1)
    // }
    // function changeColor(){
    //     setColor(c => c === "green"? "red":"green")
    // }

    // return(<>
    //         <p style={{color: color}}>Count: {count}</p>
    //         <button onClick={addToCount} >add</button>
    //         <button onClick={subtract} >subtract</button> <br />
    //         <button onClick={changeColor}>change color</button>
    // </>)


    //------ESERCIZIO 2-----

    const [width, setWidth] = useState(window.innerWidth)
    const[height, setHeight] = useState(window.innerHeight)


    //in questo modo aggiorna in automatico ma ogni volta che cambia aggiunge un event listener
    //quindi ne aggiunge a migliaia, POSSO EVITARE QUESTO CON UN UseEffect()
    // window.addEventListener("resize", catturaMisure);
    // console.log("EVENTO AGGIUNTO")

    //in questo modo aggiunge l event listener solo quando 
    useEffect(() => {
        window.addEventListener("resize", catturaMisure);
        console.log("EVENTO AGGIUNTO")

        return() => {
            window.removeEventListener("resize", catturaMisure)
            console.log("EVENTO RIMOSSO")
        }
    }, [])

    useEffect(() =>{
        document.title = `size: ${width} x ${height}`
    },[width,height])

    function catturaMisure(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return(<>
        <p>window widht: {width}px</p>
        <p>window height: {height}px</p>
    </>)
}


export default UseEffectEx