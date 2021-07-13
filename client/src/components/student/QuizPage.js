import { useState, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"
import WordService from "../../services/WordService"
import ProgressBar from "./ProgressBar"

const QuizPage = () => {

    const data = useLocation()
    const topic = data.state.topic
    const accounts = data.state.accounts

    const [questionNumber, setQuestionNumber] = useState(0);
    const [answer, setAnswer] = useState('');
    const [wordInfo, setWordInfo] = useState({});
    const [showHint, setShowHint]= useState(false);
    const [showAnswer, setShowAnswer]= useState(false);
    const [answerCorrect, setAnswerCorrect] = useState(false);
    const [randomWord, setRandomWord] = useState('')
    const [answerIncorrect, setAnswerIncorrect] = useState(false);

    const [counter, setCounter] = useState(1)
    const error = false;

    useEffect(() => {
        WordService.getWordInfo(topic.word_list[questionNumber])
            .then(res => setWordInfo(res))
    }, [questionNumber]);

    useEffect(() => {
        if (answer === quizWord) {
            setAnswerCorrect(true)
            setAnswerIncorrect(false)
            setAnswer('')
            setCounter(1)
            document.getElementById("answer-input").reset()
        } else if (answer.length === quizWord.length) {
            document.getElementById("answer-input").reset()
            setAnswerIncorrect(true)
            setCounter(1)
            setAnswer('')
        }
    }, [answer])
    
    const handleNextClick = () => {
        document.getElementById("answer-input").reset()
        setQuestionNumber(questionNumber + 1)

        setShowHint(false)
        setShowAnswer(false);
        setAnswerCorrect(false);
        setAnswerIncorrect(false);
        setCounter(1);
        setAnswer('')
    }

    const quizWord = topic.word_list[questionNumber]

    const handleHintClick = () => {
        letterRandomise(quizWord)
        setShowHint(true);
    }

    const handleRevealClick = () => {
        setShowAnswer(true);
    }

    const letterRandomise = (quizWord) => {
        let word = quizWord;
        let shuffleWord = '';
        quizWord = quizWord.split('');
        while (quizWord.length > 0) {
            shuffleWord += quizWord.splice(quizWord.length * Math.random() << 0,1);
        }
        if (word === shuffleWord) {
            letterRandomise(quizWord)
        }
        setRandomWord(shuffleWord);
    }

    const checkAnswer = (event) => {
        setAnswer(answer.concat(event.target.value.toLowerCase()))
        // .then(handleKeyUp())
        // setAnswer(event.target.value.toLowerCase())
    }

    const handleKeyUp = (event) => {
        if (counter === quizWord.length) {
            document.querySelector(`#answer-box-0`).focus();
            setCounter(0)
        } else {
            setCounter(counter +1)
            document.querySelector(`#answer-box-${counter}`).focus();
        } 
    }

    const returnContent = () => {
        if (wordInfo.definitions) {
            return (
                <section id="quiz-body">
                        <div class="quiz-head">
                            <h2>{topic.title} quiz</h2>
                            <ProgressBar questionNumber={questionNumber} answerCorrect={answerCorrect}/>
                        </div>
                        <div class="image-and-info-wrapper">
                            {Object.keys(wordInfo).length > 0 ? <img src={wordInfo.definitions[0].image_url } alt={wordInfo.word}></img> : null}
                            {answerCorrect ?
                                <div id="correct-wrapper">
                                    <h2>CORRECT!</h2>
                                    <p>{wordInfo.definitions[0].definition}</p>
                                </div> : null}
                            {answerIncorrect ?
                                <div id="incorrect-wrapper">
                                    <h2>TRY AGAIN!</h2>
                                </div> : null}
                        </div>
                        <form id="answer-input">
                            <label htmlFor="answer-box">Enter your answer here:</label>
                            {quizWord.split('').map((letter, index) => {
                                return <input maxLength='1' className="letter-input" id={`answer-box-${index}`} type="text" onKeyUp={e => {checkAnswer(e); handleKeyUp(e)}} ></input>
                            })}
                            {/* <input id="answer-box" type="text" onChange={checkAnswer}></input> */}
                        </form>
                        <div class="assist-buttons">
                            <button className="standard-button" onClick={handleHintClick}>Show Hint</button>
                            <button className="standard-button" onClick={handleRevealClick}>Reveal answer</button>
                            <div className="assist-words">
                                {showHint ? <p>Unscramble These Letters: <span className="random-word">{randomWord}</span></p> : null}
                                {showAnswer ? <p>Answer: {wordInfo.word}</p> : null}
                            </div>
                        </div>
                        <div class="nav-buttons">
                            <Link to="/student"><button className="standard-button">Back To Dashboard</button> </Link>
                            {wordInfo.word !== topic.word_list[topic.word_list.length - 1] ?
                                <button className="standard-button" onClick={handleNextClick}>Next</button> :
                                <Link to={{
                                    pathname: `/student/quiz/${topic.title}/completed`,
                                    state: {accounts}
                                }}><button>Complete Topic!</button></Link>}
                        </div>
                    </section> )
        }
        else {
            return (
                <p>Sorry, not all of the words are available to play in this game.  Try choosing another from your dashboard</p>
            )
        }
    }


    return(
        <div>
            { Object.keys(wordInfo).length > 0 ? returnContent()
             : null }
        </div>


    )
}

export default QuizPage