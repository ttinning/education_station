import {Link} from 'react-router-dom'

const Topic = ({topic, accounts}) => {

    // const completedTopics = accounts[0].student.completed_topics;
    const topicTrophies = accounts[0].student.topics_trophies[`${topic.title}`];
    console.log(topicTrophies);
    

    // const calculateCompletedTopicStatus = function () {
    //     for (let completedTopic of completedTopics) {
    //         if (topic.title === completedTopic) {
    //             return true
    //         };
    //     };
    // };

    // const completedTopicStatus = calculateCompletedTopicStatus();

    return (
        <li>
            <Link to={{
                    pathname: `/student/quiz/${topic.title}`,
                    state: {topic, accounts}
                }}><button className="standard-button">{topic.title.toUpperCase()}</button>
            </Link>
            {topicTrophies.quiz ? <p className="completed-trophy">&#127942;</p> : null}
            {topicTrophies.drag ? <p className="completed-trophy">&#127942;</p> : null}
            {topicTrophies.audio ? <p className="completed-trophy">&#127942;</p> : null}
            <Link to={{
                    pathname: `/student/${topic.title}/dnd`,
                    state: {topic, accounts}
                }}><button className="topic-button">{topic.title.toUpperCase()} DnD</button>
            </Link>
            {completedTopicStatus ? <p className="completed-trophy">&#127942;</p> : null}
            <Link to={{
                    pathname: `/student/audio/${topic.title}`,
                    state: {topic, accounts}
                }}><button className="audio-game-btn">Audio Game</button>
            </Link>
        </li>
        
    )
}

export default Topic;