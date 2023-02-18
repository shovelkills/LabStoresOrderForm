

const OrderDetailsItem = ({item})=>{

    const CheckDate  = () => {
        if (item.date === "0"){
            return(<p><strong>Date: </strong> N/A</p>)
        }else{
            return(
                <p><strong>Date: </strong> {item.date.replace('-', '/').split('T')[0].replace('-', '/')}</p>
            )
        }
    }

    if (item.date){
        return(
            
        <div className="expiryitem">
            <h4>{item.name}</h4>
            <p><strong>Quantity: </strong> {item.quantity}</p>
            <CheckDate />
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