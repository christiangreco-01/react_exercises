import React,{useState} from "react";

function EventHandler(){
    const [name, setName] = useState("guest");
    const [quantity, setQuantity] = useState(0);
    const [comment, setComment] = useState("");
    const [payment, setPayment] = useState("");
    const [shipping, setShipping] = useState("Delivery");

    function eventoNome(event){
        setName(event.target.value);
    }
    function eventoQuantita(event){
        setQuantity(event.target.value);
    }
    function eventoCommento(event){
        setComment(event.target.value);
    }
    function eventoPagamento(event){
        setPayment(event.target.value);
    }
    function eventoShipping(event){
        setShipping(event.target.value);
    }

    return(
        <div>
            <input value={name} onChange={eventoNome}/>
            <p>Nome: {name}</p>
            <input value={quantity} onChange={eventoQuantita} type="number"/>
            <p>quantità: {quantity}</p>
            <textarea value={comment} onChange={eventoCommento} placeholder="enter info delivery"/>
            <p>info delivery: {comment}</p>
            <select value={payment} onChange={eventoPagamento}>
                <option value=""> seleziona un opzione </option>
                <option value="visa"> visa </option>
                <option value="mastercard"> mastercard </option>
                <option value="giftcard"> giftcard </option>
            </select>
            <p>payment: {payment}</p>

            <label>
                <input type="radio" value="Delivery"
                    checked={shipping === "Delivery"}
                    onChange={eventoShipping}
                /> Delivery
            </label>
            <label>
                <input type="radio" value="PickUp"
                    checked={shipping === "PickUp"}
                    onChange={eventoShipping}
                /> PickUp
            </label>
            <p>shipping: {shipping}</p>
        </div>
    )
}

export default EventHandler