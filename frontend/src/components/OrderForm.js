import { useState } from "react"
import { useOrdersContext } from "../hooks/useOrdersContext"

const OrderForm = () =>{
    const {dispatch} = useOrdersContext()

    const [department, setDepartment] = useState('')
    const [extension, setExtension] = useState('')
    const [date, setDate] = useState(new Date())   
    const [notes, setNotes] = useState('') 
    const [error, setError] = useState(null)

    const handleSubmit = async (e) =>{
        e.preventDefault()

        const order = {department, extension, date, notes}

        const response = await fetch('/api/orders', {
            method: 'POST',
            body: JSON.stringify(order),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok){
            setError(json.error)
        }
        if(response.ok){
            setDepartment('')
            setExtension('')
            setDate(new Date())
            setNotes('')
            setError(null)
            console.log('new order added', json)
            dispatch({type: 'CREATE_ORDER', payload: json})
        }
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Order</h3>

            <label>Department</label>
            <input 
                type="text"
                onChange={(e) => setDepartment(e.target.value)}
                value={department}
            />
            <label>Extension</label>
            <input 
                type="number"
                onChange={(e) => setExtension(e.target.value)}
                value={extension}
            />
            <label>Date</label>
            <input 
                type="date"
                onChange={(e) => setDate(e.target.value)}
                value={date}
            />
            <label>Notes</label>
            <input 
                type="text"
                onChange={(e) => setNotes(e.target.value)}
                value={notes}
            />
            <button>Add order</button>
            {error &&<div className="error">{error}</div>}
        </form>

    )
}

export default OrderForm