import Topic from "./Topic";


const TopicList = ({topics, accounts}) => {

    const listItems = topics.map(topic => {
        return <Topic topic={topic} accounts={accounts} key={topic._id}/>
    })

    return (
        <div>
            <h2>Topic categories:</h2>
            <section >
                { accounts.length > 0 ?
                <ul className="topics-list-parents">
                    {listItems}
                </ul>
                : null }
            </section>
        </div>
    )
}

export default TopicList;