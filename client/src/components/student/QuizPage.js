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

    const quizWord = topic.word_list[questionNumber]

    const letterRandomise = (quizWord) => {
        let shuffleWord = '';
        quizWord = quizWord.split('');
        while (quizWord.length > 0) {
            shuffleWord += quizWord.splice(quizWord.length * Math.random() << 0,1);
        }
        return shuffleWord;
    }

    return(
        <div>
            <h2>{topic.title} quiz</h2>
            <p>{topic.word_list[questionNumber]}</p>
            {Object.keys(wordInfo).length > 0 ? 
            <div>
                <img src={wordInfo.definitions[0].image_url}></img> 
                <p>{wordInfo.definitions[0].definition}</p>
                <p>{letterRandomise(quizWord)}</p>
            </div>
            : null}
            <button onClick={handleNextClick}>Next</button>
        </div>
        

    )
}

export default QuizPage