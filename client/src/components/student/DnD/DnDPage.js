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

        


    return(
        <DndProvider backend={HTML5Backend}>
            <section id="dnd-body">
                <h2>{topic.title} quiz</h2>
                <ul id="dnd-list">
                    {words}
                </ul>
                <ul>
                    {definitions}
                </ul>
                {gameComplete ? 
                <Link to={{
                    pathname: `/student/dnd/${topic.title}/completed`,
                    state: {accounts}
                }}><button>Complete Topic!</button></Link> : 
                null}
                <Link to="/student"><button>Back To Dashboard</button> </Link>
            </section>
        </DndProvider>


    )
}

export default DnDPage