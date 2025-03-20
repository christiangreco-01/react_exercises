import React, {useState} from "react";

function ArrayOperation(){
    const [food, setFood] = useState(["mango", "banana", "Organge"]);

    function addFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFood(f => [...f, newFood])
    }

    function removeFood(index){
        // si usa il trattino quando un elemento non deve essere usato
        setFood(food.filter((_,i) => i !== index))
    }

    return(
        <div>
            <h1>LIST OF FOOD</h1>
            <ul>
                {/* index fa riferimento ad ogni elemento dell'array, è un parametro che mette a disposizione la funzione map*/}
                {food.map((food,index) =>
                           <li key={index} onClick={() => removeFood(index)}>
                            {food}
                           </li>
                )}
            </ul>

            <input type="text" id="foodInput" placeholder="insert food"/>
            <button onClick={addFood}>add food</button>
        </div>
    )
}

export default ArrayOperation