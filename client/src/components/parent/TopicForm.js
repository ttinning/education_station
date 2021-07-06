import { useState } from "react";
import TopicService from "../../services/TopicService";
import WordService from "../../services/WordService";
import AccountsService from "../../services/AccountsService";

const TopicForm = ({addNewTopic, accounts}) => {

    const [formData, setFormData] = useState({});

    const onChange = (evt) => {
        formData[evt.target.id] = evt.target.value;
        setFormData(formData);
        };

    const handleFormSubmit = (evt) => {
        evt.preventDefault()

        const formattedData = formatNewTopic();
        TopicService.postTopic(formattedData)
            .then((data) => {addNewTopic(formattedData)})

        updateTrophiesOnAccount();
        resetForm();
        
    };

    const updateTrophiesOnAccount = () => {
        const temp = {...accounts[0]}
        temp.student.topics_trophies[`${formData.title}`] = {"quiz": false, "drag": false, "audio": false};
        delete temp._id
        console.log(temp);
        AccountsService.updateAccounts(accounts[0]._id, temp)
    };

    const formatNewTopic = () => {
        let words = Object.values(formData);
        words.splice(0, 1);
        let formattedData = {
            "title": formData.title,
            "word_list": words
        };

        return formattedData;

        
    };

    const resetForm = () => {
        const form = document.querySelector('#new-topic-form')
        form.reset();
        setFormData({});
    };

    return (
        <div>
            <h2>Topic form</h2>
            <form onSubmit={handleFormSubmit} id="new-topic-form">
                <label htmlFor="title">Topic title</label>
                <input onChange={onChange} type="text" id="title" required></input>
                <h3>Word list</h3>
                <label htmlFor="word1">1.</label>
                <input onChange={onChange} type="text" id="word1"></input>
                <label htmlFor="word2">2.</label>
                <input onChange={onChange} type="text" id="word2"></input>
                <label htmlFor="word3">3.</label>
                <input onChange={onChange} type="text" id="word3"></input>
                <label htmlFor="word4">4.</label>
                <input onChange={onChange} type="text" id="word4"></input>
                <label htmlFor="word5">5.</label>
                <input onChange={onChange} type="text" id="word5"></input>
                <label htmlFor="word6">6.</label>
                <input onChange={onChange} type="text" id="word6"></input>
                <label htmlFor="word7">7.</label>
                <input onChange={onChange} type="text" id="word7"></input>
                <label htmlFor="word8">8.</label>
                <input onChange={onChange} type="text" id="word8"></input>
                <label htmlFor="word9">9.</label>
                <input onChange={onChange} type="text" id="word9"></input>
                <label htmlFor="word10">10.</label>
                <input onChange={onChange} type="text" id="word10"></input>
                <button className="standard-button" type="submit">Save topic</button>
            </form>
        </div>
    );
};

export default TopicForm;