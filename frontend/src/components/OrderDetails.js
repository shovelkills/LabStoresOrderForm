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
    //Returns normal Items
    const ItemOrders = () => {
        
        const Items = (<div className="Items">
            {Object.values(order.items).map((field, index) => (
            <OrderDetailsItem key = {index} item = {field}/>
        ))}
        </div>)
        
        return(
            Items
        )
    }
    //Returns imtes with expiry dates
    const ExpiryItemsOrders = () => {
        const ExpiryItems = (<div className="ExpiryItems">
            {Object.values(order.expiryItems).map((field, index) => (
            <OrderDetailsItem key = {index} item = {field}/>
        ))}
        </div>)

        return(
            ExpiryItems
        )

    }

    const Orderinformation = () => {
        return(
            <div className="Information">
                <h4>{order.information.department}</h4>
                <p><strong>Extension: </strong>{order.information.extension}</p>
                <p><strong>Date: </strong>{order.information.date.replace('-', '/').split('T')[0].replace('-', '/')}</p>
                <p><strong>Time Since Order:</strong>{formatDistanceToNow(new Date(order.information.date), {addSuffix: true})}</p>
            </div>
        )
    }


    const Orderdetail = () =>{
        return(
            <div className="order-details">
                <Orderinformation />
                <div className="itemsContainer">
                    <ItemOrders />
                    <ExpiryItemsOrders />
                </div>
                <span onClick={handleClick}>delete</span>
                
            </div>
        )
    }


    return(
        <Orderdetail/>
    );
}
export default OrderDetails