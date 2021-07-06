import { useState, useEffect } from "react";
import AudioService from "../../services/AudioService";
import { useLocation, Link } from "react-router-dom"

const AudioGame = function() {

    
    const data = useLocation()
    const topic = data.state.topic
    const audioWordList = topic.word_list;

    const [focusWord, setFocusWord] = useState(audioWordList[0]);
    const [wordAudioAPI, setWordAudioAPI] = useState({});
    
    
    useEffect(() => {
        AudioService.getWordAudioAPI(focusWord)
            .then(res => setWordAudioAPI(res))
    }, [focusWord]);

    const getAudioLink = () => {      
        if (wordAudioAPI[0]) {
            const audioLink = wordAudioAPI[0].phonetics[0].audio;
            return audioLink;
        } else {
            return "no audio link";
        };
    };
    const audioLink = getAudioLink();
    

    const handleButtonClick = function() {
        goToNextWord();
    };

    const goToNextWord = () => {
        const currentFocusWordIndex = audioWordList.indexOf(focusWord);
        if (currentFocusWordIndex < audioWordList.length - 1) {
            const nextFocusWordIndex = currentFocusWordIndex + 1
            const nextFocusWord = audioWordList[nextFocusWordIndex];
            setFocusWord(nextFocusWord);
        } else {
            console.log("end of list");
        };
    };

    const playAudio = () => {
        const audio = new Audio(audioLink);
        audio.play();
    };

    const handleAnswerSubmit = (evt) => {
        evt.preventDefault();
        const guess = evt.target.guess.value.toLowerCase().trim();
        console.log(guess);
        if (guess === focusWord) {
            console.log("correct")
        } else {
            console.log("incorrect");
        };
    };
    

    return (
        <div>
            <h3>Can you spell these animal words?</h3>
            {focusWord}
            <button onClick={playAudio}>Play audio</button> 
            <button id="next-button" onClick={handleButtonClick}>Next word</button>
            <section>
                <form onSubmit={handleAnswerSubmit}>
                    <label for="guess">Your guess:</label>
                    <input type="text" id="guess"></input>
                    <button type="submit">Check</button>
                </form>
            </section>
        </div>
    );
};

export default AudioGame;