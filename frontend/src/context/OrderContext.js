import { createContext, useReducer } from "react"

export const OrdersContext = createContext()

export const ordersReducer = (state, action) =>{
    switch(action.type){
        case 'SET_ORDERS':
            //displays the orders
            return{
                orders: action.payload
            }
        case 'CREATE_ORDER':
            //adds new order and displays 
            return{
                orders: [action.payload, ...state.orders]
            }
        default:
            return state
    }
}

export const OrdersContextProvider = ({ children }) =>{
    const [state, dispatch] = useReducer(ordersReducer, {
        orders: null
    })


    return(
        <OrdersContext.Provider value={{...state, dispatch}}>
            { children }
        </OrdersContext.Provider>
    )
}