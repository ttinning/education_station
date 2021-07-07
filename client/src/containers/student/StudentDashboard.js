import {useState, useEffect} from 'react'
import TopicService from "../../services/TopicService";
import TopicList from "../../components/student/TopicList";
import AccountsService from "../../services/AccountsService";



const StudentDashboard = () => {

    const [topics, setTopics] = useState([])
    const [accounts, setAccounts] = useState([])
    
    useEffect(() => {
        TopicService.getTopics()
            .then(result => setTopics(result))
        AccountsService.getAccounts()
            .then(result => setAccounts(result))
    }, [])
    return (
        <section className="dashboard">
                <h2>Student Dashboard</h2>
                <p>Pick a topic and game, then try and collect all the trophies!</p>
                {accounts.length > 0 && topics.length > 0 ? <TopicList topics={topics} accounts={accounts}></TopicList> 
                : null}

                
        </section>
    )
}

export default StudentDashboard;