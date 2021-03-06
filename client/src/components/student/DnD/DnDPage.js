import { useState, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"
import WordService from "../../../services/WordService"
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { WordDrag } from "./WordDrag"
import { DefinitionDrop } from "./DefinitionDrop"

const DnDPage = () => {

    const data = useLocation()
    const topic = data.state.topic
    const accounts = data.state.accounts;

    

    const [wordInfo, setWordInfo] = useState([])
    const [score, setScore] = useState(0);
    const [gameComplete, setGameComplete] = useState(false)

    useEffect(() => {
        let tempArray = []
        topic.word_list.map((word) => {
            WordService.getWordInfo(word)
            .then(res => tempArray = [...tempArray, res])
            .then(res => setWordInfo(tempArray))
            })
        }, [])

    useEffect(() => {
        finishGame()
    }, [score])

    const incrementScore = () => {
        setScore(score => score +1);
    }

    const finishGame = () => {
        if (topic.word_list.length === score) {
            setGameComplete(true)
        } else {
            return null
        }
    }

        const words = topic.word_list.map((word, index) => {
            return <WordDrag word={word} key={index} wordId={index} incrementScore={incrementScore}></WordDrag>
        });

        const definitions = wordInfo.map((word, index) => {
            return <DefinitionDrop word={word} key={index}></DefinitionDrop>
        });

    const returnContent = () => {
        if (wordInfo[0].definitions) {
            return (
            <DndProvider backend={HTML5Backend}>
                <section id="dnd-page">
                    <h2>{topic.title} Drag and Drop Game</h2>
                    <p>Drag the correct word onto its definition.</p>
                    <div id="dnd-container">
                        <ul>
                            {words}
                        </ul>
                        <ul>
                            {definitions}
                        </ul>
                    </div>
                    {gameComplete ? 
                    <Link to={{
                        pathname: `/student/drag/${topic.title}/completed`,
                        state: {accounts}
                    }}><button className="standard-button">Complete Topic!</button></Link> : 
                    null}
                    <Link to="/student"><button className="standard-button">Back To Dashboard</button> </Link>
                </section>
            </DndProvider>
            )
        }
        else {
            return (
                <p>Sorry, not all of the words are available to play in this game.  Try choosing another from your dashboard</p>
            );
        }
    }; 
    
    return(
        
        <div>
            { wordInfo.length > 0 ? returnContent() : null}
        </div>
    )
}

export default DnDPage