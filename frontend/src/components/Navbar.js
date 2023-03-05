import { Link } from 'react-router-dom'
import {useLogout} from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'


const Navbar = () =>{

    const {logout} = useLogout()
    const {user} = useAuthContext()

    const handleClick = () =>{
        logout()
    }

    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Lab Orders</h1>
                </Link>
                <nav>
                    {user && (<div>
                        <span>{user.email}</span>
                        <button onClick={handleClick}>Logout</button>
                    </div>)}
                    {!user && (
                        <div>
                    <Link to="/signup">
                        <h1>Sign Up</h1>
                    </Link>
                    <Link to="/login">
                        <h1>Login</h1>
                    </Link>
                    </div>)}
                    {user && (<Link to="/archives">
                    <h1>Archives</h1>
                    </Link>)}
                </nav>
            </div>
        </header>
    )
}

export default Navbar