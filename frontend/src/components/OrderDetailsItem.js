

const OrderDetailsItem = ({item})=>{

    

    if (item.date){
        return(
            
        <div className="expiryitem">
            <h4>{item.name}</h4>
            <p><strong>Quantity: </strong> {item.quantity}</p>
            <p><strong>Date: </strong> {item.date.replace('-', '/').split('T')[0].replace('-', '/')}</p>
        </div>
        )
    } else{
        return(
            <div className="item">
                <h4>{item.name}</h4>
                <p><strong>Quantity: </strong> {item.quantity}</p>
            </div>
            )
    }
}

export default OrderDetailsItem