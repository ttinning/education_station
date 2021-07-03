import { useState, useEffect } from "react";
import TopicList from "../../components/parent/TopicList";
import TopicService from "../../services/TopicService";

const ParentDashboard = () => {
    
    const [topics, setTopics] = useState([])
    const [accounts, setAccounts] = useState([
        {
        "_id": "60e06023cfc77651299f6b23",
        "parent": {
        "name": "Sue",
        "email": "sueparker@hotmail.com"
        },
        "student": {
        "name": "Sara",
        "age": 6,
        "learning_status": {
        "animals": "not started"
        }
        }
        }
        ]);
    
    useEffect(() => {
        TopicService.getTopics()
            .then(result => setTopics(result))
    }, [])

    return (
        <section>
            <h2>See what {accounts[0].student.name} has been learning</h2>
            <TopicList topics={topics}></TopicList>
        </section>
    )
}

export default ParentDashboard;