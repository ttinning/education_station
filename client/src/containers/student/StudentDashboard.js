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
        <div>
            <h2>This is the student dashboard</h2>
            <TopicList topics={topics}></TopicList>
        </div>
    )
}

export default StudentDashboard;