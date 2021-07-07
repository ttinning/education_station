import AccountsService from "../../services/AccountsService";
import Word from "./Word";

const Topic = ({topic, accounts}) => {    
    const words = topic.word_list.map((word) => {
        return <Word word={word} accounts={accounts}></Word>
    });

    return ( 
        <div>
            <h3 id="topics-list-title">{topic.title}</h3>
            <ul>
                {words}
            </ul>
        </div>
    )
}

export default Topic;