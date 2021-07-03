import {Link} from 'react-router-dom'

const Topic = ({topic}) => {

    return (
        <li>
            <Link to={{
                    pathname: `/student/${topic.title}`,
                    state: {topic}
                }}><button className="topic-button">{topic.title.toUpperCase()}</button>
            </Link> 
        </li>
    )
}

export default Topic;