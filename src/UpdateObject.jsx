import React,{useState} from "react";

function UpdateObject(){
    const[car, setCar] = useState({ year: 2024,
                                    make: "ford",
                                    model: "fiesta"
                                    })
    function changeYear(event){
        setCar(c => ({...c, year: event.target.value}))
    }

    function changeMake(event){
        setCar(c => ({...c, make: event.target.value}))
    }

    function changeModel(event){
        setCar(c => ({...c, model:event.target.value}))
    }

    return(
        <div>
            <p>your favorite car: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={changeYear}/>
            <input type="text" value={car.make} onChange={changeMake}/>
            <input type="text" value={car.model} onChange={changeModel}/>
        </div>
    );
}

export default UpdateObject