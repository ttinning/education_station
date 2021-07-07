import {Link} from 'react-router-dom';

const LandingPage = () => {
    return (
        <section id="landing-page">
            <Link to="/parent" id='parent-button'><button>Parent</button> </Link>
            <Link to="/student" id='student-button'><button>Student</button> </Link>
        </section>
    )
}

export default LandingPage;