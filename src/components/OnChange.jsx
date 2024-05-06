//input, textarea, select, radio; onChange triggers function on change
import {useState} from 'react'

export default function OnChange () {
    const [name, setName] = useState("enter a name")
    const [quantity, setQuantity] = useState(1)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("Delivery")

    function handleNameChange(event) {
        setName(event.target.value)
    }
    function handleQuantityChange(event) {
        setQuantity(event.target.value)
    }
    function handleCommentChange(event) {
        setComment(event.target.value)
    }
    function handlePaymentChange(event){
        setPayment(event.target.value)
    }
    function handleShippingChange(event) {
        setShipping(event.target.value)
    }
    return (
        <div>            
            <ul>
                <li><input value={name} onChange = {handleNameChange} /> Name: {name}</li>
                <li><input value={quantity} onChange = {handleQuantityChange} type="number" /> Amount: {quantity}</li>
                <li><textarea value = {comment} onChange={handleCommentChange} placeholder = "this is placeholder text"/> Comment: {comment}</li>
                <li>
                    <select value={payment} onChange={handlePaymentChange}>
                        <option value="">Select an option</option>
                        <option value="Visa">Visa</option>
                        <option value="Mastercard">Mastercard</option>
                        <option value="Giftcard">Gift Card</option>
                    </select>&nbsp;
                    Payment: {payment}
                </li>
                <li>
                <label>
                    <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange}/>
                    Pick Up
                </label>
                <label>
                    <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange}/>
                    Delivery
                </label>
                </li>
            </ul>
        </div>
    )
}