import '../../styles/CompletionPage.css'
import trophy from "../../images/trophy.png"
import { useParams, Link, useLocation} from 'react-router-dom'
import { useState, useEffect } from 'react'
import AccountsService from '../../services/AccountsService'

import ConfettiExplosion from '@reonomy/react-confetti-explosion';

const CompletionPage = () => {

const data = useLocation();
const accounts = data.state.accounts;

const [isExploding, setIsExploding] = useState(false);   

useEffect(() => {
    setIsExploding(true)
}, []) 

const updateAccount = () => {
    const temp = {...accounts[0]}
    temp.student.topics_trophies[`${topic}`][`${gameType}`] = true;
    delete temp._id
    AccountsService.updateAccounts(accounts[0]._id, temp)
};

let {topic} = useParams()
let {gameType} = useParams()

    return(
        <div id='completion-page-wrapper'>
            {isExploding && <ConfettiExplosion />}
            <p>You have completed the {topic} {gameType} game!</p>
            <img id='trophy-img' src={trophy} alt="gold completion trophy" />
            <Link to="/student"><button className="standard-button" onClick={updateAccount}>Claim trophy</button> </Link>
        </div>
    )
}

export default CompletionPage
