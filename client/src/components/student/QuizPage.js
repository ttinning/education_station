import { useLocation } from "react-router-dom"

const QuizPage = () => {

    const data = useLocation()
    const topic = data.state.topic
    console.log(data.state.topic)

    return(
        <div>
            <p>{topic.word_list}</p>
            <p>This is the Quizpage</p>
        </div>
        

    )
}

export default QuizPage