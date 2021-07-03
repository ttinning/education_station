import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <h1>Education App</h1>
            <ul id="navbar">
                <Link to="/">Home </Link>
            </ul>
        </nav>
    )
}

export default Navbar