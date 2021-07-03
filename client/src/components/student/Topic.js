import {Link, useParams} from 'react-router-dom'

const Topic = ({topic}) => {

     
    return (
        
        <div>
            <h4>{topic.title}</h4>
            <Link to={`/student/quiz/${topic.title}`} topic={topic}><button>{topic.title}</button></Link> 

        </div>
    )
}

export default Topic;