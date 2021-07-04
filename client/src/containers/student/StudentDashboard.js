import {useState, useEffect} from 'react'
import TopicService from "../../services/TopicService";
import TopicList from "../../components/student/TopicList";

const StudentDashboard = () => {

    const [topics, setTopics] = useState([])
    
    useEffect(() => {
        TopicService.getTopics()
            .then(result => setTopics(result))
    }, [])
    return (
        <section className="dashboard">
                <h2>Student Dashboard</h2>
                <TopicList topics={topics}></TopicList>
        </section>
    )
}

export default StudentDashboard;