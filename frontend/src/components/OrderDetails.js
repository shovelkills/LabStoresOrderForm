const OrderDetails = ({ order}) =>{
    return(
        <div className="order-details">
            <h4>{order.department}</h4>
            <p><strong>Extension: </strong>{order.extension}</p>
            <p><strong>Date: </strong>{order.date}</p>
        </div>
    )
}
export default OrderDetails