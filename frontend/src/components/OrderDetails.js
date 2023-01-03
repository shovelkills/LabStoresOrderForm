import { useOrdersContext } from "../hooks/useOrdersContext"

import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const OrderDetails = ({ order }) =>{

    const { dispatch } = useOrdersContext()

    //Function to delete data
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
        //Order detail display 
        <>
        <button class="accordion"> <h4>{order.department}</h4> </button>
            <div className="order-details">
                <h4>{order.department}</h4>
                <p><strong>Extension: </strong>{order.extension}</p>
                <p><strong>Date: </strong>{formatDistanceToNow(new Date(order.date), {addSuffix: true})}</p>
                <span onClick={handleClick}>delete</span>
            </div>

        <script type="text/javascript">

            let acc = document.getElementsByClassName("accordion");
            let i;

            for (i = 0; i < acc.length; i++){
                acc[i].addEventListener("click", function(){
                    this.classList.toggle("active");

                    var panel = this.nextElementSibling;
                    if (panel.style.display === "block"){
                        panel.style.display = "none";
                    }else{
                        panel.style.display = "block";
                    }
                })
            }

        </script>
        </>
        
    )
}
export default OrderDetails