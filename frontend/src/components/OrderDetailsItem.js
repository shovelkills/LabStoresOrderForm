
//Prop contains Item object and page string variable
const OrderDetailsItem = (props)=>{

    const CheckDate  = () => {
        if (props.item.date === "0"){
            return(<p><strong>Date: </strong> N/A</p>)
        }else{
            return(
                <p><strong>Date: </strong> {props.item.date.replace('-', '/').split('T')[0].replace('-', '/')}</p>
            )
        }
    }

    const DateInfo = () =>{
        return(
            <div>
                <h4>{props.item.name}</h4>
                <p><strong>Quantity: </strong> {props.item.quantity}</p>
            </div>
        )
    }

    if (props.item.date){
        if (new Date(props.item.date) <= new Date() && props.item.date !== "0" && props.page !== "archives"){
            return(
                <div className="expiryitemexpired">
                    <DateInfo/>
                    <CheckDate />
                </div>
                )
        }else{
            return(
                <div className="expiryitem">
                    <DateInfo/>
                    <CheckDate />
                </div>
                )
        }
        
    } else{
        return(
            <div className="item">
                <h4>{props.item.name}</h4>
                <p><strong>Quantity: </strong> {props.item.quantity}</p>
            </div>
            )
    }
}

export default OrderDetailsItem