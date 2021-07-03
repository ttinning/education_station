import {Link} from 'react-router-dom';

const LandingPage = () => {
    return (
        <section>
            <Link to="/parent"><button>Parent</button> </Link>
            <Link to="/student"><button>Student</button> </Link>
        </section>
    )
}

export default LandingPage;