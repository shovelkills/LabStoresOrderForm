

const OrderDetailsItem = ({item})=>{
    console.log(item.name)
    if (item.date){
        return(
        <div className="item">
            <h4>{item.name}</h4>
            <p>{item.quantity}</p>
            <p>{item.date}</p>
            <p>It works</p>
        </div>
        )
    } else{
        return(
            <div className="item">
                <h4>{item.name}</h4>
                <p>{item.quantity}</p>
                <p>It works</p>
            </div>
            )
    }
}

export default OrderDetailsItem