import Topic from "./Topic";
import {Link} from 'react-router-dom'

const TopicList = ({topics, accounts}) => {

    const listItems = topics.map(topic => {
        return <Topic topic={topic} accounts={accounts} key={topic._id}/>
    })

    return (
        <div>
            <ul className="topic-buttons-container">
                {listItems}
            </ul>
        </div>
    )
}

export default TopicList;