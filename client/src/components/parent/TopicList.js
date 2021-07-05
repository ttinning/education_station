import Topic from "./Topic";


const TopicList = ({topics, accounts}) => {

    const listItems = topics.map(topic => {
        return <Topic topic={topic} accounts={accounts} key={topic._id}/>
    })

    return (
        <div>
            <h2>Topic categories:</h2>
            { accounts.length > 0 ?
            <ul className="topics-list">
                {listItems}
            </ul>
            : null }
        </div>
    )
}

export default TopicList;