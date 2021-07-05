import {useState, useEffect} from 'react'
import TopicService from "../../services/TopicService";
import TopicList from "../../components/student/TopicList";
import AccountsService from "../../services/AccountsService";


const StudentDashboard = () => {

    const [topics, setTopics] = useState([])
    const [accounts, setAccounts] =useState({})
    
    useEffect(() => {
        TopicService.getTopics()
            .then(result => setTopics(result))
        AccountsService.getAccounts()
            .then(result => setAccounts(result))
    }, [])
    return (
        <section className="dashboard">
                <h2>Student Dashboard</h2>
                <TopicList topics={topics} accounts={accounts}></TopicList>
        </section>
    )
}

export default StudentDashboard;