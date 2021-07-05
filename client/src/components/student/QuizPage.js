import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import WordService from "../../services/WordService"

const QuizPage = () => {

    const data = useLocation()
    const topic = data.state.topic

    const [questionNumber, setQuestionNumber] = useState(0);
    const [answer, setAnswer] = useState('');
    const [wordInfo, setWordInfo] = useState({});
    const [showHint, setShowHint]= useState(false);
    const [showAnswer, setShowAnswer]= useState(false);
    const [answerCorrect, setAnswerCorrect] = useState(false);
    const [randomWord, setRandomWord] = useState('')

    useEffect(() => {
        WordService.getWordInfo(topic.word_list[questionNumber])
            .then(res => setWordInfo(res))
            .then(letterRandomise(quizWord));
    }, [questionNumber]);

    useEffect(() => {
        if (answer === quizWord) {
            setAnswerCorrect(true)
            document.getElementById("answer-input").reset()
        } else if (answer.length === quizWord.length) {
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
        let word = quizWord;
        let shuffleWord = '';
        quizWord = quizWord.split('');
        while (quizWord.length > 0) {
            shuffleWord += quizWord.splice(quizWord.length * Math.random() << 0,1);
        }
        if (word === shuffleWord) {
            letterRandomise(quizWord)
        }
        console.log(shuffleWord)
        setRandomWord(shuffleWord);
    }

    const checkAnswer = (event) => {
        setAnswer(event.target.value.toLowerCase())
    }

    return(
        <section id="quiz-body">
            <h2>{topic.title} quiz</h2>
            
            {Object.keys(wordInfo).length > 0 ? <img src={wordInfo.definitions[0].image_url } alt={wordInfo.word}></img> : null}
            
            <button onClick={handleHintClick}>Show Hint</button>
            {showHint ? <p>{randomWord}</p> : null}

            <button onClick={handleRevealClick}>Reveal answer</button>
            {showAnswer ? <p>The answer is {wordInfo.word}</p> : null}

            

            <form id="answer-input">
                <label htmlFor="answer-box">Enter your answer here:</label>
                <input id="answer-box" type="text" onChange={checkAnswer}></input>
            </form>

            {answerCorrect ? 
                <div>
                    <h2>CORRECT!</h2>
                    <p>{wordInfo.definitions[0].definition}</p>
                </div> : null}

            {wordInfo.word !== topic.word_list[topic.word_list.length - 1] ? <button onClick={handleNextClick}>Next</button> : <button>Complete Topic!</button> }

        </section>


    )
}

export default QuizPage