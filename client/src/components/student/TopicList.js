import Topic from "./Topic";


const TopicList = ({topics}) => {

    const listItems = topics.map(topic => {
        return <Topic topic={topic} key={topic._id}/>
    })

    return (
        <div>
            <h3>Topics</h3>
            <ul className="topic-buttons-container">
                {listItems}
            </ul>
        </div>
    )
}

export default TopicList;