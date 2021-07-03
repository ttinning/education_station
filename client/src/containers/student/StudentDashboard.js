import {useState, useEffect} from 'react'
import TopicService from "../../services/TopicService";
import TopicList from "../../components/student/TopicList";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


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