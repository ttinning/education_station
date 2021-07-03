import {Link} from 'react-router-dom'

const Topic = ({topic}) => {

    return (
        <div>
            <h4>{topic.title}</h4>
            <Link to={{
                    pathname: `/student/${topic.title}`,
                    state: {topic}
                }}><button>{topic.title}</button>
            </Link> 
        </div>
    )
}

export default Topic;