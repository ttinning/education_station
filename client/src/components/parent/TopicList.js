import Topic from "./Topic";


const TopicList = ({topics}) => {

    const listItems = topics.map(topic => {
        return <Topic topic={topic} key={topic._id}/>
    })

    return (
        <div>
            <h1>Topic categories:</h1>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default TopicList;