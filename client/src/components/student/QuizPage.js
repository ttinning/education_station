import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import WordService from "../../services/WordService"

const QuizPage = () => {

    const data = useLocation()
    const topic = data.state.topic

    const [questionNumber, setQuestionNumber] = useState(0);
    const [answer, setAnswer] = useState("");
    const [wordInfo, setWordInfo] = useState({});
    const [showHint, setShowHint]= useState(false);
    const [showAnswer, setShowAnswer]= useState(false);
    const [answerCorrect, setAnswerCorrect] = useState(false);

    useEffect(() => {
        WordService.getWordInfo(topic.word_list[questionNumber])
            .then(res => setWordInfo(res))
    }, [questionNumber]);

    useEffect(() => {
        if (answer === quizWord) {
            setAnswerCorrect(true)
            document.getElementById("answer-input").reset()
        }
    }, [answer])
    
    const handleNextClick = () => {
        document.getElementById("answer-input").reset()
        setQuestionNumber(questionNumber + 1)
        setShowHint(false)
        setShowAnswer(false);
        setAnswerCorrect(false);
    }

    const handleHintClick = () => {
        setShowHint(true);
    }

    const handleRevealClick = () => {
        setShowAnswer(true);
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

    const randomWord = letterRandomise(quizWord)

    const checkAnswer = (event) => {
        setAnswer(event.target.value.toLowerCase())
    }

    return(
        <div>
            <h2>{topic.title} quiz</h2>
            
            {Object.keys(wordInfo).length > 0 ? <img src={wordInfo.definitions[0].image_url } alt={wordInfo.word}></img> : null}
            
            <button onClick={handleHintClick}>Show Hint</button>
            {showHint ? <p>{letterRandomise(quizWord)}</p> : null}

            <button onClick={handleRevealClick}>Reveal answer</button>
            {showAnswer ? <p>The answer is {wordInfo.word}</p> : null}

            {answerCorrect ? 
                <div>
                    <h2>CORRECT!</h2>
                    <p>{wordInfo.definitions[0].definition}</p>
                </div> : null}

            <form id="answer-input">
                <input type="text" onChange={checkAnswer}></input>
            </form>

            {wordInfo.word !== topic.word_list[topic.word_list.length - 1] ? <button onClick={handleNextClick}>Next</button> : <button>Complete Topic!</button> }

        </div>


    )
}

export default QuizPage