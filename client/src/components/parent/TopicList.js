import Topic from "./Topic";


const TopicList = ({topics}) => {

    const listItems = topics.map(topic => {
        return <Topic topic={topic} key={topic._id}/>
    })

    return (
        <div>
            <h2>Topic categories:</h2>
            <ul className="topics-list">
                {listItems}
            </ul>
        </div>
    )
}

export default TopicList;