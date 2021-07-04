import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

const QuizPage = () => {

    const data = useLocation()
    const topic = data.state.topic

    const [questionNumber, setQuestionNumber] = useState(0);

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
            <p>{letterRandomise(quizWord)}</p>
            <p>This is the Quizpage</p>
            <button onClick={handleNextClick}>Next</button>
        </div>
        

    )
}

export default QuizPage