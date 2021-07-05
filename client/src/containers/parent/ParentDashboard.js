import { useState, useEffect } from "react";
import TopicList from "../../components/parent/TopicList";
import TopicService from "../../services/TopicService";
import AccountsService from "../../services/AccountsService";
import TopicForm from "../../components/parent/TopicForm";

const ParentDashboard = () => {
    
    const [topics, setTopics] = useState([])
    const [accounts, setAccounts] = useState([]);

    AccountsService.updateAccounts('60e2cb6ff9f992b30a7aface', {
        "parent": {
          "name": "Sue",
          "email": "sueparker@hotmail.co.uk"
        },
        "student": {
          "name": "Beth",
          "age": 6,
          "completed_topics": [
            "animals"
          ]
        }
      })
    
    useEffect(() => {
        TopicService.getTopics()
            .then(result => setTopics(result))
        AccountsService.getAccounts()
            .then(result => setAccounts(result))
    }, [])

    const addNewTopic = (newTopic) => {
        const temp = topics.map(topics => topics);
        temp.push(newTopic);
        setTopics(temp);
    };


    return (
        <section className="dashboard">
            <h2>Parent Dashboard</h2>
            { accounts.length > 0 ?
            <section id="account-details">
                <h3>Account details</h3>
                <p>Parent: {accounts[0].parent.name}</p>
                <p>email: {accounts[0].parent.email}</p>
                <p>Student: {accounts[0].student.name}</p>

                <p>Age: {accounts[0].student.age}</p>
            </section> : null}

            <TopicForm addNewTopic={addNewTopic}></TopicForm>
            
            <TopicList topics={topics} accounts={accounts}></TopicList>
        </section>
    )
}

export default ParentDashboard;