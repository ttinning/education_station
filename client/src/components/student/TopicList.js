import Topic from "./Topic";
import AudioGame from "./AudioGame";
import {Link} from 'react-router-dom'



const TopicList = ({topics, accounts}) => {

    const listItems = topics.map(topic => {
        return <Topic topic={topic} accounts={accounts} key={topic._id}/>
    })

    return (
        <div>
            <h3>Topics</h3>
            <ul className="topic-buttons-container">
                {listItems}
            </ul>
            <Link to={{
                    pathname: `/audiogame`,
                    state: {accounts}
                }}><button className="audio-game-btn">Audio Game</button>
            </Link>

        </div>
    )
}

export default TopicList;