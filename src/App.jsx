//-----------LESSON 1-----------
// import Header from './Header.jsx'
// import Footer from './Footer.jsx'
// import Food from './Food.jsx'

// function App() {
//   return(
//     <>
//       <Header/>
//       <Food/>
//       <Footer/>
//     </>
//   )
// }
// export default App

//-----------LESSON 2-----------

// import Card from './Card.jsx'

// function App(){
//   return(
//     <>
//       <Card/>
//       <Card/>
//       <Card/>
//       <Card/>
//     </>
//   )
// }

// export default App


//-----------LESSON 3-----------
// HOW TO STYLE REACT COMPONENTS WITH CSS
// 1. EXTERNAL (classico, nell index.css)
// 2. MODULES (in un documento apparte per i diversi documenti ad es. Button.module.css)
// 3. INLINE (direttamente nel componente )

// import Button from './Button.jsx'

// function App(){
//   return(<Button/>);
// }

// export default App 

//----------LESSON 4-----------
//import Student from './Student.jsx'

//PROP PER PASSARE I DATI
// function App(){
//   return(
//     //in questo modo passo come parametro la parola christian al componente Student
//     <>
//       <Student name="Christian" age={23} isStudent={false}/>
//       <Student name="Giorgia" age={24} isStudent={true}/>
//       <Student name="Luisa" age={21} isStudent={true}/>
//       <Student name="Marco" age={29} isStudent={false}/>
//     </>
//   );
// }
// export default App

// //PROPTYPES PER PASSARE UN DATO CHE PERO' SIA DI UN DETERMINATO TIPO PREDEFINITO 
// function App(){
//   return(
//     //in questo modo passo come parametro la parola christian al componente Student
//     <>
//       <Student name="Christian" age={23} isStudent={false}/>
//       <Student name="Giorgia" age={24} isStudent={true}/>
//       <Student name="Luisa" age={21} isStudent={true}/>
//       <Student name="Marco" age={29} isStudent={false}/>
//       <Student name=""/>
//     </>
//   );
// }
// export default App 

////----------LESSON 5-----------

// import UserGreeting from './UserGreeting.jsx'

// function App(){
//   return(
//     <>
//         <UserGreeting isLoggedIn={true} username="Christian"/>
//         <UserGreeting />
//     </>
//   );
// }

// export default App 

//----------LESSON 6----------- (render list)
// import List from './List';

// function App(){
//   const fruits = [{id:1, name: 'apple', calories: 24},
//                   {id:2, name: 'banana', calories: 89},
//                   {id:3, name:'mango', calories: 34},
//                   {id:4, name: 'pinapple', calories: 21},
//                   {id:5 ,name: 'orange', calories: 29}]
                  
//   const vegetables = [{id:6, name: 'potatoes', calories: 124},
//                     {id:7, name: 'carrots', calories: 19},
//                     {id:8, name:'corn', calories: 234},
//                     {id:9, name: 'mais', calories: 121},
//                     {id:10 ,name: 'broccoli', calories: 49}]

//   //posso usare l'operatore condizionale e stampare solo se sono presenti degli elementi
//   // return(<>
//   //           {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
//   //           {vegetables.length > 0 ? <List items={vegetables} category="Vegetables"/> : null}
//   //       </>)

//   //o posso fare la stessa cosa anche con AND dato che se non è vera la prima condizione allora non legge la seconda
//   return(<>
//             {fruits.length > 0 && <List items={fruits} category="Fruits"/>}
//             {vegetables.length > 0 && <List items={vegetables} category="Vegetables"/>}
//         </>)
// }

// export default App

//----------LESSON 6----------- (click event)
// import ButtonTwo from './ButtonTwo'
// import ProfilePicture from './ProfilePicture'

// function App(){
//   return(<ProfilePicture/>)
// }

// export default App

//----------LESSON 6----------- (useState() hook)
//PARTE UNO
// import MyComponent from './MyComponent.jsx';

// function App(){
//   return(<MyComponent/>)
// }

// export default App

//PARTE DUE COUNTER
// import Counter from './Counter.jsx';

// function App(){
//   return(<Counter/>)
// }

// export default App

//------------LESSON 9------------ event handler
// import EventHandler from './EventHandler.jsx';

// function App(){
//   return(<EventHandler/>)
// }
// export default App
//------------LESSON 9------------ esercizietto

// import ColorPicker from './ColorPicker.jsx';

// function App(){
//   return(<ColorPicker/>)
// }

// export default App

//------------LESSON 10------------ updater function
// import Counter from './Counter.jsx';

// function App(){
//   return(<Counter/>)
// }

// export default App

//------------LESSON 12------------ update object
// import UpdateObject from './UpdateObject.jsx';

// function App(){
//   return(<UpdateObject/>)
// }

// export default App

//------------LESSON 13------------ array
// import ArrayOperation from './ArrayOperation.jsx';

// function App(){
//   return(<ArrayOperation/>)
// }

// export default App

//------------LESSON 13------------ array of object
// import ListObjectEs from './ListObjectEs.jsx';

// function App(){
//   return(<ListObjectEs/>)
// }

// export default App
// //------------LESSON 13------------ array of object
// import ListObjectTask from './ListObjectTask.jsx';

// function App(){
//   return(<ListObjectTask/>)
// }

// export default App

//------------LESSON 16------------ useEffect()
// import UseEffectEx from './UseEffectEx.jsx';

// function App(){
//   return(<UseEffectEx/>)
// }

// export default App

//------------LESSON 16------------ digitalClock
// import DigitalClock from './DigitalClock.jsx';

// function App(){
//   return(<> 
//     <DigitalClock/>
//     <DigitalClock/>
//     <DigitalClock/>
//   </>)
// }

// export default App

//------------LESSON 17------------ useContext() è un hook che ci permette di passare informazioni tra livelli senza usare props
// PROVIDER COMPONENT
// 1. import {createContext} from 'react';
// 2. export const MyContext = createContext ();
// 3. <MyContext.Provider value={value}>
//      <Child />
//    </MyContext.Provider›

//CONSUMER COMPONENTS
// 1. import React, { useContext } from 'react'
//      import { MyContext } from ' . /ComponentA';
// 2. const value = useContext (MyContext);


// import ComponentA from './ComponentA.jsx';

// function App(){
//   return(<> 
//     <ComponentA/>
//   </>)
// }
// export default App

//--------LEZIONE 19--------- useRef() : viene usata al posto di useState e consente di evitare il rendirizzamento
                                     //  della pagina ogni volta che viene modificata una variabile

// import UseRefEx from './UseRefEx.jsx';

// function App(){
//   return(<> 
//           <UseRefEx/>
//         </>)
// }

// export default App


//--------LEZIONE 20---------
import StopWatch from './StopWatch.jsx';

function App(){
  return(<> 
          <StopWatch/>
          <StopWatch/>
          <StopWatch/>
        </>)
}

export default App