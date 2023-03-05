import {useState} from 'react'
import {useSignup} from "../hooks/useSignup"

const SignUp = () =>{
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const[department, setDepartment] = useState('')
    const {signup, isLoading, error} = useSignup()

    const handleSubmit = async(e) => {
        e.preventDefault()
        await signup(email, password, department)
    }

    return(
        <form className = "signup" onSubmit={handleSubmit}>
            <h3> Sign up</h3>
            <label>Email: </label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <label>Password: </label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <label>Department:</label>
            <select 
                type="department"
                onChange={(e) => setDepartment(e.target.value)}
            >
                <option value="department1">department1</option>
                <option value="department2">department2</option>
                <option value="department3">department3</option>
                <option value="department4">department4</option>
                <option value="department5">department5</option>
                <option value="labStaff">Lab Stores Staff</option>

            </select>
            <button disable={isLoading}>Sign Up</button>
            {error &&<div className="error">{error}</div>}
        </form>
    )
}

export default SignUp