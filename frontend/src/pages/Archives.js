import { useEffect } from "react"
import { useOrdersContext } from "../hooks/useOrdersContext"

//compoenents
import OrderDetails from '../components/OrderDetails'



const Archives = () =>{
    const {orders, dispatch} = useOrdersContext()
    //Gets the data from the database and puts it in json format
    useEffect(() =>{
        const fetchOrders = async() =>{
            const response = await fetch('/api/orders')
            const json = await response.json()

            if (response.ok){
                dispatch({type: 'SET_ORDERS', payload: json})
            }
        }

        fetchOrders()
    }, [dispatch])
    //Returns differences in days
    const dateDiffinDays = (compareDate) =>{
        const currentDate = new Date()
        const comparedDate = new Date(compareDate)
        var diff = Math.abs(currentDate.getTime() - comparedDate.getTime());
        return diff / (1000 * 60 * 60 * 24);
    }

    return (
        <div className="Archive">
            <h2>Archives</h2>
            <div className="orders">
                {orders && orders.map((order) =>{
                    if (dateDiffinDays(order.createdAt) >= 5){
                        return(<OrderDetails key={order._id} order={order} page="archives"/>)
                    }
                })}
            </div>
        </div>
    )

}

export default Archives