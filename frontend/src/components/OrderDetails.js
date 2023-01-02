import { useOrdersContext } from "../hooks/useOrdersContext"

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const OrderDetails = ({ order }) =>{

    const { dispatch } = useOrdersContext()

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
        <div className="order-details">
            <h4>{order.department}</h4>
            <p><strong>Extension: </strong>{order.extension}</p>
            <p><strong>Date: </strong>{formatDistanceToNow(new Date(order.date), {addSuffix: true})}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    )
}
export default OrderDetails