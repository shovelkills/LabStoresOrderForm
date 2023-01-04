import { useOrdersContext } from "../hooks/useOrdersContext"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
        <div className="order-details">
            <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                <Typography><h4>{order.department}</h4></Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    <p><strong>Extension: </strong>{order.extension}</p>
                    <p><strong>Date: </strong>{formatDistanceToNow(new Date(order.date), {addSuffix: true})}</p>
                    <span onClick={handleClick}>delete</span>
                </Typography>
            </AccordionDetails>
            </Accordion>
        </div>
    )
}
export default OrderDetails