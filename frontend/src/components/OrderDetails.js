import { useOrdersContext } from "../hooks/useOrdersContext"
import { useAuthContext } from "../hooks/useAuthContext"

import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import OrderDetailsItem from "./OrderDetailsItem.js"


//Prop contains order object and page string variable
const OrderDetails = (props) =>{

    const { dispatch } = useOrdersContext()
    const {user} = useAuthContext()
    let count = 0;

    //Function to delete data
    const handleClick = async () =>{
        const response = await fetch('/api/orders/' + props.order._id, {
            method: 'DELETE',
            headers:{
                'Authorization': `Bearer ${user.token}`,
            }
        })
        const json = await response.json()

        if (response.ok){
            dispatch({type: 'DELETE_ORDER', payload: json})
        }
    }
    //Returns normal Items
    const ItemOrders = () => {
        
        const Items = (<div className="Items">
            {Object.values(props.order.items).map((field, index) => (
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
            {Object.values(props.order.expiryItems).map((field, index) => (
            <OrderDetailsItem key = {index} item = {field} page = {props.page}/>
        ))}
        </div>)

        return(
            ExpiryItems
        )

    }

    const Orderinformation = () => {
        return(
            <div className="Information">
                <h4>{props.order.information.department}</h4>
                <p><strong>Extension: </strong>{props.order.information.extension}</p>
                <p><strong>Date: </strong>{props.order.information.date.replace('-', '/').split('T')[0].replace('-', '/')}</p>
                <p><strong>Time Since Order:</strong>{formatDistanceToNow(new Date(props.order.information.date), {addSuffix: true})}</p>
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