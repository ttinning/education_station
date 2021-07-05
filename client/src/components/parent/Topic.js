import AccountsService from "../../services/AccountsService";
import Word from "./Word";

const Topic = ({topic, accounts}) => {    
    const words = topic.word_list.map((word) => {
        return <Word word={word} accounts={accounts}></Word>
    });

    
    
    return (
        
        <div>
            <h3>{topic.title}</h3>
            { accounts.length > 0 ?
            <ul>
              {words}
            </ul>
            : null }
        </div>
    )
}

export default Topic;