import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import WordService from "../../services/WordService"

const QuizPage = () => {

    const data = useLocation()
    const topic = data.state.topic

    const [questionNumber, setQuestionNumber] = useState(0);
    const [answer, setAnswer] = useState("")
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
        document.getElementById("answer-input").reset()
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

    const randomWord = letterRandomise(quizWord)

    const handleSubmit = (quizWord) => {
        if (answer == quizWord) {
            console.log('correct')
        }
    }

    const checkAnswer = (event) => {
        setAnswer(event.target.value.toLowerCase())
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
            <form id="answer-input" onSubmit={handleSubmit(quizWord)}>
                <input type="text" onChange={checkAnswer}></input>
                {/* <button type="submit" >Submit</button> */}
            </form>
            {/* <form>
                <input type="text" onSubmit={handleSubmit} />
                <input value="submit" type="submit" onSubmit={checkWord(answer, quizWord)}/>
            </form> */}
            <button onClick={handleNextClick}>Next</button>
        </div>


    )
}

export default QuizPage