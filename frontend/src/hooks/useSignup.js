import {useState} from 'react'
import {useAuthContext} from './useAuthContext'

export const useSignup = () =>{
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()

    const signup = async (email, password, department) => {
        setIsLoading(true)
        setError(null)
        console.log(department)
        const response = await fetch('/api/user/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password, department})
        })
        
        const json = await response.json()

        if (!response.ok){
            console.log(json)
            setIsLoading(false)
            setError(json.error)
        }
        if (response.ok){
            //saves the user to local storage
            localStorage.setItem('user', JSON.stringify(json))
            console.log(department)
            //update the auth context
            dispatch({type: 'LOGIN', payload: json})

            setIsLoading(false)
        }

        
    }

    return {signup, isLoading, error}

}