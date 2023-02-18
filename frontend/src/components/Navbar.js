import { Link } from 'react-router-dom'

const Navbar = () =>{
    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Lab Orders</h1>
                </Link>
                <Link to="/archives">
                    <h1>Archives</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar