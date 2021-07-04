import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

const QuizPage = () => {

    const data = useLocation()
    const topic = data.state.topic

    const [questionNumber, setQuestionNumber] = useState(0);
    const [answer, setAnswer] = useState("")

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
        // console.log(quizWord)
    }

    return(
        <div>
            <p>{randomWord}</p>
            <p>This is the Quizpage</p>
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