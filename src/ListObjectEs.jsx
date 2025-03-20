import React, {useState} from "react";

function ListObjectEs(){

    const[cars, setCar] = useState([]);
    const[CarYear, setYear] = useState(new Date().getFullYear());
    const[CarMake, setMake] = useState("");
    const[CarModel, setModel] = useState("");

    function addCar(){
        const newCar = {year: CarYear, 
                        make: CarMake, 
                        model: CarModel}

        //agiungo la macchina appena creata
        setCar(c => [...c, newCar])
        setYear(new Date().getFullYear());
        setMake("");
        setModel("");
    }

    function removeCar(index){

        //ricorda sempre di usare l'update function
        setCar(c => c.filter((_,i) => i !== index))
    }

    function changeYear(event){
        setYear(event.target.value)
    }
    function changeMake(event){
        setMake(event.target.value)
    }
    function changeModel(event){
        setModel(event.target.value)
    }

    return(
        <div>
            <h1>LISTA AUTO</h1>
            <ul>
                {cars.map((car, index) =>
                                        <li key={index} onClick={() => removeCar(index)}>
                                            {car.year} {car.make} {car.model}
                                        </li>)}
            </ul>
            <input type="number" value={CarYear} onChange={changeYear}/>
            <input type="text" value={CarMake} onChange={changeMake} placeholder="marca"/>
            <input type="text" value={CarModel} onChange={changeModel} placeholder="modello"/>
            <button onClick={addCar}>add car</button>
        </div>
    )
}

export default ListObjectEs