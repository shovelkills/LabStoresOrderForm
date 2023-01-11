import { useOrdersContext } from "../hooks/useOrdersContext"


import { 
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
 } from '@mui/material'
 import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import OrderDetailsItem from "./OrderDetailsItem"

const OrderDetails = ({ order }) =>{

    const { dispatch } = useOrdersContext()
    const itemsArray = (Object.values(order.items)).map(o => [o.name, o.quantity])
    console.log(itemsArray);
    let count = 0;

    //Function to delete data
    const handleClick = async () =>{
        const response = await fetch('/api/orders/' + order._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok){
            dispatch({type: 'DELETE_ORDER', payload: json})
        }
    }

    return(
        //Order detail display
        <div className="order-details">
            <h4>{order.information.department}</h4>
            <p><strong>Extension: </strong>{order.information.extension}</p>
            <p><strong>Date: </strong>{formatDistanceToNow(new Date(order.information.date), {addSuffix: true})}</p>
            <span onClick={handleClick}>delete</span>
           {itemsArray && itemsArray.map((item, count) => (
                <OrderDetailsItem key = {count + 1} item = {item}/>
            ))} 
        </div>
    );
}
export default OrderDetails