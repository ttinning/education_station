import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import WordService from "../../services/WordService"

const QuizPage = () => {

    const data = useLocation()
    const topic = data.state.topic

    const [questionNumber, setQuestionNumber] = useState(0);
    const [wordInfo, setWordInfo] = useState({})


    useEffect(() => {
        WordService.getWordInfo(topic.word_list[questionNumber])
            .then(res => setWordInfo(res))
            // .then(wordImage = wordInfo.definitions[0].image_url)
    }, [questionNumber]);

    // const [word, setword] = useState(topic.word_list[questionNumber]);

    // useEffect(() => {
    //     setword(topic.word_list[questionNumber])
    // }, [questionNumber])

    const handleNextClick = () => {
        setQuestionNumber(questionNumber + 1)
    }

    return(
        <div>
            <h2>{topic.title} quiz</h2>
            <p>{topic.word_list[questionNumber]}</p>
            {Object.keys(wordInfo).length > 0 ? 
            <div>
                <img src={wordInfo.definitions[0].image_url}></img> 
                <p>{wordInfo.definitions[0].definition}</p>
            </div>
            : null}
            <button onClick={handleNextClick}>Next</button>
        </div>
        

    )
}

export default QuizPage