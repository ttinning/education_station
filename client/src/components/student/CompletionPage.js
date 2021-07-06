import '../../CompletionPage.css'
import trophy from "../../images/trophy.png"
import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import ConfettiExplosion from '@reonomy/react-confetti-explosion';

const CompletionPage = () => {

const [isExploding, setIsExploding] = useState(false);   

useEffect(() => {
    setIsExploding(true)
}, []) 

let {topic} = useParams()

    return(
        <div id='completion-page-wrapper'>
            {isExploding && <ConfettiExplosion />}
            <p>You have completed the {topic} quiz!</p>
            <img id='trophy-img' src={trophy} alt="gold completion trophy" />
            <Link to="/student"><button>Back To Dashboard</button> </Link>
        </div>
    )
}

export default CompletionPage
