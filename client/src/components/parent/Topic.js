import Word from "./Word";

const Topic = ({topic}) => {

    console.log(topic.word_list);
    
    const words = topic.word_list.map((word) => {
        return <Word word={word}></Word>
    });
    
    
    return (
        
        <div>
            <h3>{topic.title}</h3>
            <ul>
                {words}
            </ul>
        </div>
    )
}

export default Topic;