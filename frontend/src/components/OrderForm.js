import { useState } from "react"
import { useOrdersContext } from "../hooks/useOrdersContext"

const OrderForm = () =>{
    const {dispatch} = useOrdersContext()

    const [department, setDepartment] = useState('')
    const [extension, setExtension] = useState('')
    const [date, setDate] = useState(new Date())   
    const [notes, setNotes] = useState('') 
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const [item1, setItem1] = useState({
        "name": "item1",
        "quantity": 0
    })
    const [item2, setItem2] = useState({
        "name": "item2",
        "quantity": 0
        
    })
    const [item3, setItem3] = useState({
        "name": "item3",
        "quantity": 0
    })
    const [item4, setItem4] = useState({
        "name": "item4",
        "quantity": 0
    })
    const [item5, setItem5] = useState({
        "name": "item5",
        "quantity": 0
    })
    const [item6, setItem6] = useState({
        "name": "item6",
        "quantity": 0
    })

    let items = {}

    

    const [expiryItem1, setExpiryItem1] = useState({
        "quantity": 0,
        "date": "0"

    })
    const [expiryItem2, setExpiryItem2] = useState({
        "quantity": 0,
        "date": "0"
    })
    const [expiryItem3, setExpiryItem3] = useState({
        "quantity": 0,
        "date": "0"
    })
    const [expiryItem4, setExpiryItem4] = useState({
        "quantity": 0,
        "date": "0"
    })
    const [expiryItem5, setExpiryItem5] = useState({
        "quantity": 0,
        "date": "0"
    })
    const [expiryItem6, setExpiryItem6] = useState({
        "quantity": 0,
        "date": "0"
    })

    let expiryItems = {}


    const handleSubmit = async (e) =>{
        e.preventDefault()

        const information = {department, extension, date, notes}
        items = {
            "item1":item1,
            "item2":item2,
            "item3":item3,
            "item4":item4,
            "item5":item5,
            "item6":item6
        }

        expiryItems = {
            "expiryItem1":expiryItem1,
            "expiryItem2":expiryItem2,
            "expiryItem3":expiryItem3,
            "expiryItem4":expiryItem4,
            "expiryItem5":expiryItem5,
            "expiryItem6":expiryItem1
        }

        const order = {information, items, expiryItems}

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
            setEmptyFields(json.emptyFields)    
        }
        if(response.ok){
            setDepartment('')
            setExtension('')
            setDate(new Date())
            setNotes('')
            setError(null)
            setEmptyFields([])
            console.log('new order added', json)
            dispatch({type: 'CREATE_ORDER', payload: json})
        }
    }

    const addItem = (event) =>{
        const name = event.target.name
        const value =  event.target.value

        switch(name){
            case "item1":
                setItem1(values => ({...values, ["quantity"]: value}));
                break;
            case "item2":
                setItem2(values => ({...values, ["quantity"]: value}));
                break;
            case "item3":
                setItem3(values => ({...values, ["quantity"]: value}));
                break;
            case "item4":
                setItem4(values => ({...values, ["quantity"]: value}));
                break;     
            case "item5":
                setItem5(values => ({...values, ["quantity"]: value}));
                break;
            case "item6":
                setItem6(values => ({...values, ["quantity"]: value}))
        }
    }

    const addExpiryItem = (event) =>{
        const name = event.target.name
        const value = event.target.value

        if (name.includes("1")){
            if (name.includes("Date")){
                setExpiryItem1(values => ({...values, ["date"]: value}))
            }else{
                setExpiryItem1(values => ({...values, ["quantity"]: value}))
            }
        }else if(name.includes("2")){
            if (name.includes("Date")){
                setExpiryItem2(values => ({...values, ["date"]: value}))
            }else{
                setExpiryItem2(values => ({...values, ["quantity"]: value}))
            }
        }else if(name.includes("3")){
            if (name.includes("Date")){
                setExpiryItem3(values => ({...values, ["date"]: value}))
            }else{
                setExpiryItem3(values => ({...values, ["quantity"]: value}))
            }
        }else if(name.includes("4")){
            if (name.includes("Date")){
                setExpiryItem4(values => ({...values, ["date"]: value}))
            }else{
                setExpiryItem4(values => ({...values, ["quantity"]: value}))
            }
        }else if(name.includes("5")){
            if (name.includes("Date")){
                setExpiryItem5(values => ({...values, ["date"]: value}))
            }else{
                setExpiryItem5(values => ({...values, ["quantity"]: value}))
            }
        }else{
            if (name.includes("Date")){
                setExpiryItem6(values => ({...values, ["date"]: value}))
            }else{
                setExpiryItem6(values => ({...values, ["quantity"]: value}))
            }
        }
    }


    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Order</h3>
            <div className="informationForm">
                <h4>Information</h4>
                <label>Department</label>
                <input 
                    type="text"
                    onChange={(e) => setDepartment(e.target.value)}
                    value={department}
                    className={emptyFields.includes('department') ? 'error' : ''}
                />
                <label>Extension</label>
                <input 
                    type="number"
                    onChange={(e) => setExtension(e.target.value)}
                    value={extension}
                    placeholder="00000"
                    min="0"
                    className={emptyFields.includes('extension') ? 'error' : ''}
                />
                <label>Date</label>
                <input 
                    type="date"
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                    className={emptyFields.includes('date') ? 'error' : ''}
                />
                <label>Notes</label>
                <input 
                    type="text"
                    placeholder="Write notes for order here"
                    onChange={(e) => setNotes(e.target.value)}
                    value={notes}
                />
            </div>
            <div className="itemsForm">
                <label>Item1:</label>
                <input 
                    type="number"
                    name="item1"
                    onChange={addItem}
                    defaultValue="0"
                    min="0"
                    value={items.item1}
                />
                <label>Item2:</label>
                <input 
                    type="number"
                    name="item2"
                    onChange={addItem}
                    defaultValue="0"
                    min="0"
                    value={items.item2}
                />
                <label>Item3:</label>
                <input 
                    type="number"
                    name="item3"
                    onChange={addItem}
                    defaultValue="0"
                    min="0"
                    value={items.item3}
                />
                <label>Item4:</label>
                <input 
                    type="number"
                    name="item4"
                    onChange={addItem}
                    defaultValue="0"
                    min="0"
                    value={items.item4}
                />
                <label>Item5:</label>
                <input 
                    type="number"
                    name="item5"
                    onChange={addItem}
                    defaultValue="0"
                    min="0"
                    value={items.item5}
                />
                <label>Item6:</label>
                <input 
                    type="number"
                    name="item6"
                    onChange={addItem}
                    defaultValue="0"
                    min="0"
                    value={items.item6}
                />
            </div>
            <div className="expiryItemForm">
                <div className="singleExpiryItem">
                    <div className="Quantity">
                        <label>Expiry Item 1:</label>
                        <input 
                            type="number"
                            name="expiryItem1"
                            onChange={addExpiryItem}
                            defaultValue="0"
                            min="0"
                            value={expiryItem1.quantity}
                        />
                    </div>
                    <div className="Date">
                        <label>Expiry Item 1 Date:</label>
                        <input 
                            type="date"
                            name="expiryItem1Date"
                            onChange={addExpiryItem}
                            value={expiryItem1.date}
                        />
                    </div>
                </div>
                <div className="singleExpiryItem">
                    <div className="Quantity">
                        <label>Expiry Item 2:</label>
                        <input 
                            type="number"
                            name="expiryItem2"
                            onChange={addExpiryItem}
                            defaultValue="0"
                            min="0"
                            value={expiryItem2.quantity}
                        />
                    </div>
                    <div className="Date">
                        <label>Expiry Item 2 Date:</label>
                        <input 
                            type="date"
                            name="expiryItem2Date"
                            onChange={addExpiryItem}
                            value={expiryItem2.date}
                        />
                    </div>
                </div>
                <div className="singleExpiryItem">
                    <div className="Quantity">
                        <label>Expiry Item 3:</label>
                        <input 
                            type="number"
                            name="expiryItem3"
                            defaultValue="0"
                            min="0"
                            onChange={addExpiryItem}
                            value={expiryItem3.quantity}
                        />
                    </div>
                    <div className="Date">
                        <label>Expiry Item 3 Date:</label>
                        <input 
                            type="date"
                            name="expiryItem3Date"
                            onChange={addExpiryItem}
                            value={expiryItem3.date}
                        />
                    </div>
                </div>
                <div className="singleExpiryItem">
                    <div className="Quantity">
                        <label>Expiry Item 4:</label>
                        <input 
                            type="number"
                            name="expiryItem4"
                            defaultValue="0"
                            min="0"
                            onChange={addExpiryItem}
                            value={expiryItem4.quantity}
                        />
                    </div>
                    <div className="Date">
                        <label>Expiry Item 4 Date:</label>
                        <input 
                            type="date"
                            name="expiryItem4Date"
                            onChange={addExpiryItem}
                            value={expiryItem4.date}
                        />
                    </div>
                </div>
                <div className="singleExpiryItem">
                    <div className="Quantity">
                        <label>Expiry Item 5:</label>
                        <input 
                            type="number"
                            name="expiryItem5"
                            defaultValue="0"
                            min="0"
                            onChange={addExpiryItem}
                            value={expiryItem5.quantity}
                        />
                    </div>
                    <div className="Date">
                        <label>Expiry Item 5 Date:</label>
                        <input 
                            type="date"
                            name="expiryItem5Date"
                            onChange={addExpiryItem}
                            value={expiryItem5.date}
                        />
                    </div>
                </div>
                <div className="singleExpiryItem">
                    <div className="Quantity">
                        <label>Expiry Item 6:</label>
                        <input 
                            type="number"
                            name="expiryItem6"
                            defaultValue="0"
                            min="0"
                            onChange={addExpiryItem}
                            value={expiryItem6.quantity}
                        />
                    </div>
                    <div className="Date">
                        <label>Expiry Item 6 Date:</label>
                        <input 
                            type="date"
                            name="expiryItem6Date"
                            onChange={addExpiryItem}
                            value={expiryItem6.date}
                        />
                    </div>
                </div>
                

            </div>
            <button>Add order</button>
            {error &&<div className="error">{error}</div>}
        </form>

    )
}

export default OrderForm