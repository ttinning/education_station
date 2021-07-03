import Topic from "./Topic";


const TopicList = ({topics}) => {

    const listItems = topics.map(topic => {
        return <Topic topic={topic} key={topic._id}/>
    })

    return (
        <div>
            <h1>This is the Parent Topic List</h1>
            <ul>
                {listItems}
            </ul>
        </div>
    )
}

export default TopicList;