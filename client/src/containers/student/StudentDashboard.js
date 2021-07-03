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
        <div>
            <h2>This is the student dashboard</h2>
            <TopicList topics={topics}></TopicList>
        </div>
    )
}

export default StudentDashboard;