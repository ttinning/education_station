import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav id="navbar">
            <ul>
                <Link to="/">Home </Link>
            </ul>
        </nav>
    )
}

export default Navbar