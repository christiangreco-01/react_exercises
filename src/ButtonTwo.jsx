function ButtonTwo(){

//-----FUNZIONI SUL CLICK con onclick------
//const FunzioneAlClick = () => console.log("mi hai cliccato");

// const FunzioneAlClick2 = (name) => console.log(`basta cliccare ${name}`);
// passavo questo all' onClick {() => FunzioneAlClick2("christian")}

// let count = 0;

//     const FunzioneAlClick3 = (name) => {
//         if(count < 3){
//             count++;
//             console.log(`${name} mi hai cliccato ${count} volte`);
//         }else{
//             count++; 
//             console.log(`${name} basta cliccarmi!  mi hai cliccato gia ${count} volte`);
//         }
//     }

//     return(<button onClick={() => FunzioneAlClick3("christian")}>Click me!</button> );
    
//-----FUNZIONI SUL CLICK PASSANDO UN EVENTO COME PARAMETRO------
    const funzioneAlClick4 = (e) => e.target.textContent = "ahia!"

    return(<button onClick={(e) => funzioneAlClick4(e)}>Click me!</button> );
    
    //si puo anche fare col double click
    //return(<button onDoubleClick={(e) => funzioneAlClick4(e)}>Click me!</button> );

}

export default ButtonTwo