import { useState, useEffect } from "react";
import TopicList from "../../components/parent/TopicList";
import TopicService from "../../services/TopicService";
// import AccountsService from "../../services/AccountsService";

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
        // AccountsService.getAccounts()
        //     .then(result => setAccounts(result))
    }, [])

    return (
        <section className="dashboard">
            <h2>Parent Dashboard</h2>
            
            <section id="account-details">
                <h3>Account details</h3>
                <p>Parent: {accounts[0].parent.name}</p>
                <p>email: {accounts[0].parent.email}</p>
                <p>Student: {accounts[0].student.name}</p>
                <p>Age: {accounts.[0].student.age}</p>
                <h3>Learning status</h3>
                <p>Animal words : {accounts.[0].student.learning_status.animals}</p>
            </section>
            
            <TopicList topics={topics}></TopicList>
        </section>
    )
}

export default ParentDashboard;