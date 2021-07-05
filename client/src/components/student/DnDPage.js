import { useState, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"
import WordService from "../../services/WordService"
import AccountService from '../../services/AccountsService'
import { WordDrag } from "./DnDDrag"

import { ImageDrop } from "./DnDDrop"

const DnDPage = () => {

    const data = useLocation()
    const topic = data.state.topic
    const accounts = data.state.accounts

    const [word1Info, setWord1Info] = useState({})
    const [word2Info, setWord2Info] = useState({})

    useEffect(() => {
        WordService.getWordInfo(topic.word_list[1])
            .then(res => setWord1Info(res))
    }, []);

    useEffect(() => {
        WordService.getWordInfo(topic.word_list[2])
            .then(res => setWord2Info(res))
    }, []);



    // useEffect(() => {
    //     topic.word_list.map((word) => {
    //         let tempArray = []
    //         WordService.getWordInfo(word)
    //         .then(res => tempArray.push(res))
    //         .then(console.log(tempArray))
    //         .then(setWordInfo(tempArray))
    //     })
    //         }, [])

 

    return(
            <section id="quiz-body">
                <h2>{topic.title} quiz</h2>
                <ul id="dnd-list">
                    <WordDrag />
                    <li className="dnd-word" role="Word">{word1Info.word}</li>
                    <ImageDrop />
                    <li className="dnd-word">{word2Info.word}</li>
                    {/* <li className="dnd-image"><img src={word2Info.definitions[0].image_url} alt="" /></li> */}
                </ul>
            
                <Link to="/student"><button>Back To Dashboard</button> </Link>
            </section>



    )
}

export default DnDPage