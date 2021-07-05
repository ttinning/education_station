import '../../CompletionPage.css'
import trophy from "../../images/trophy.png"
import { useParams, Link } from 'react-router-dom'

const CompletionPage = () => {
let {topic} = useParams()

    return(
        <div id='completion-page-wrapper'>
            <p>You have completed the {topic} quiz!</p>
            <img id='trophy-img' src={trophy} alt="gold completion trophy" />
            <Link to="/student"><button>Student</button> </Link>
        </div>
    )
}

export default CompletionPage
