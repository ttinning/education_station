import {Link} from 'react-router-dom'

const Topic = ({topic, accounts}) => {

    return (
        <li>
            <Link to={{
                    pathname: `/student/${topic.title}`,
                    state: {topic, accounts}
                }}><button className="topic-button">{topic.title.toUpperCase()}</button>
            </Link> 
        </li>
    )
}

export default Topic;