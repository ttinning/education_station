import {Link} from 'react-router-dom'

const Topic = ({topic, accounts}) => {

    const topicTrophies = accounts[0].student.topics_trophies[`${topic.title}`];
    console.log(topicTrophies);
    

   

    return (
        <li>
           
            <div className='topic-wrapper'>
                <h2>{topic.title}</h2>
                    <div className='topics'>
                        <Link to={{
                                pathname: `/student/quiz/${topic.title}`,
                                state: {topic, accounts}
                            }}><button className="standard-button">Spell</button>
                        </Link>
                        {topicTrophies.quiz ? <p className="completed-trophy">&#127942;</p> : <p className="uncompleted-trophy">&#127942;</p>}
                    </div>
                
                    <div className="topics">
                        <Link to={{
                                pathname: `/student/dnd/${topic.title}`,
                                state: {topic, accounts}
                            }}><button className="standard-button">Match</button>
                        </Link>
                        {topicTrophies.drag ? <p className="completed-trophy">&#127942;</p> : <p className="uncompleted-trophy">&#127942;</p>}
                    </div>
                
                    <div className="topics">
                        <Link to={{
                                pathname: `/student/audio/${topic.title}`,
                                state: {topic, accounts}
                            }}><button className="standard-button">Listen</button>
                        </Link>
                        {topicTrophies.audio ? <p className="completed-trophy">&#127942;</p> : <p className="uncompleted-trophy">&#127942;</p>}
                    </div>
                </div>
        </li>   
    )
}

export default Topic;