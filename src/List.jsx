// function List (){
    // const fruits = [{id:1, name: 'apple', calories: 24},
    //                 {id:2, name: 'banana', calories: 89},
    //                 {id:3, name:'mango', calories: 34},
    //                 {id:4, name: 'pinapple', calories: 21},
    //                 {id:5 ,name: 'orange', calories: 29}]

//     //ordina in ordine alfabetico                                                        
//     //fruits.sort((a, b) => a.name.localeCompare(b.name));

//     //ordina in ordine alfabetico ma al contrario
//     //fruits.sort((a, b) => b.name.localeCompare(a.name));

//     //ordina in base alle calorie
//     //fruits.sort((a, b) => a.calories - b.calories)

//     //ordina in base alle calorie ma al contrario
//     //fruits.sort((a, b) => b.calories - a.calories)

//     //filtra solo la frutta con meno di 30 calorie
//     //const lowCalories = fruits.filter((fruit) => fruit.calories < 30) //poi occorre stampare questo per vederlo

//     const listItems = fruits.map(fruit => <li key={fruit.id}>
//                                             {fruit.name}: &nbsp;
//                                             <b>{fruit.calories}</b>
//                                             </li>)
    
//     return (<ol>{listItems}</ol>);

// export default List
// }


//ora rendiamo generale l'esempio precedente
import PropTypes from 'prop-types';


function List (props){
    const category = props.category
    const listaBaseItems = props.items;

    const listItems = listaBaseItems.map(item => <li key={item.id}>
                                            {item.name}: &nbsp;
                                            <b>{item.calories}</b>
                                            </li>)
    
    return (<>
                <h3 className="list-category">{category}</h3>
                <ol className="list-item">{listItems}</ol>
            </>);
}

List.PropTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number,
                                               name: PropTypes.string,
                                               calories: PropTypes.number
                                                }))
}

List.defaultProps = {
    category: "Category",
    items: [],
}

export default List