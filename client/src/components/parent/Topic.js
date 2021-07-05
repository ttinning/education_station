import AccountsService from "../../services/AccountsService";
import Word from "./Word";


const Topic = ({topic, accounts}) => {    
    const words = topic.word_list.map((word) => {
        return <Word word={word} accounts={accounts}></Word>
    });

    const completedTopics = accounts[0].student.completed_topics;

    const calculateCompletedTopicStatus = function () {
        for (let completedTopic of completedTopics) {
            if (topic.title === completedTopic) {
                return "Completed!"
            };
        };
    };

    const completedTopicStatus = calculateCompletedTopicStatus();
 
    return ( 
        <div>
            <h3>{topic.title} {completedTopicStatus}</h3>
            <ul>
              {words}
            </ul>
        </div>
    )
}

export default Topic;