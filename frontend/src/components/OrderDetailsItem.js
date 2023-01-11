const OrderDetailsItem = ({ item }) => {
    return(
        <div className="item">
            <h4>{item[0]}</h4>
            <p>{item[1]}</p>
            <p>It works</p>
        </div>
    );
}

export default OrderDetailsItem