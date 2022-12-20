import { useEffect, useState } from "react"

//compoenents
import OrderDetails from '../components/OrderDetails'
import OrderForm from '../components/OrderForm'

const Home = () =>{

    const [orders, setOrders] = useState(null)

    useEffect(() =>{
        const fetchOrders = async() =>{
            const response = await fetch('/api/orders')
            const json = await response.json()

            if (response.ok){
                setOrders(json)
            }
        }

        fetchOrders()
    }, [])

    return(
        <div className="home">
            <div className="orders">
                {orders && orders.map((order) =>(
                    <OrderDetails key={order._id} order={order}/>
                ))}
            </div>
            <OrderForm/>
        </div>
    )
}

export default Home