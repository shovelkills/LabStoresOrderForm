import { useOrdersContext } from "../hooks/useOrdersContext"


import { 
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
 } from '@mui/material'
 import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import OrderDetailsItem from "./OrderDetailsItem.js"

const OrderDetails = ({ order }) =>{

    const { dispatch } = useOrdersContext()
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


    const Orderdetail = () =>{
        return(
            <div className="order-details">
                <h4>{order.information.department}</h4>
                <p><strong>Extension: </strong>{order.information.extension}</p>
                <p><strong>Date: </strong>{formatDistanceToNow(new Date(order.information.date), {addSuffix: true})}</p>
                {Object.values(order.items).map((field, index) => (
                        <OrderDetailsItem key = {index} item = {field}/>
                ))}
                <span onClick={handleClick}>delete</span>
                
            </div>
        )
    }


    return(
        <Orderdetail/>
    );
}
export default OrderDetails