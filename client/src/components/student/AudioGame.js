import { useState, useEffect } from "react";
import AudioService from "../../services/AudioService";
import { useLocation, Link } from "react-router-dom"
import AccountService from "../../services/AccountsService";

const AudioGame = function() {

    
    const data = useLocation();
    const topic = data.state.topic;
    const accounts = data.state.accounts;
    const audioWordList = topic.word_list;

    const [focusWord, setFocusWord] = useState(audioWordList[0]);
    const [wordAudioAPI, setWordAudioAPI] = useState({});
    let wrongCounter = 0;

    const checkLastWord = () => {
        return audioWordList.indexOf(focusWord) === audioWordList.length - 1;
    };

    let lastWordCheck = checkLastWord();
    

    
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
        const nextButton = document.querySelector('.next-button');
        
        if (currentFocusWordIndex < audioWordList.length - 1) {
            const nextFocusWordIndex = currentFocusWordIndex + 1
            const nextFocusWord = audioWordList[nextFocusWordIndex];
            setFocusWord(nextFocusWord);
            nextButton.hidden = true;
        } else {
            nextButton.textContent = "Finsh topic";
        };
        wrongCounter = 0;        
        const text = document.querySelector('#correct-text');
        text.hidden = true;
        const form = document.querySelector('#form')
        form.reset();
        
    };

    const playAudio = () => {
        const audio = new Audio(audioLink);
        audio.play();
    };

    const handleAnswerSubmit = (evt) => {
        evt.preventDefault();
        const guess = evt.target.guess.value.toLowerCase().trim();
        console.log(guess);
        const text = document.querySelector('#correct-text');
        const nextButton = document.querySelector('.next-button');
        text.hidden = false;
        if (guess === focusWord) {
            text.textContent = "That's Correct!!!"
            console.log("correct")
            nextButton.hidden = false;
        } else {  
            text.textContent = "Wrong, try again"
            console.log("incorrect");
            wrongCounter ++;
            if (wrongCounter >= 2 ) {
                nextButton.hidden = false;
            }
        };
    };

    const updateAccount = () => {
        const temp = {...accounts[0]}
        temp.student.completed_topics.push(topic.title)
        delete temp._id
        AccountService.updateAccounts(accounts[0]._id, temp)
    };
    

    return (
        <div>
            <h3>Can you spell these animal words?</h3>
            {focusWord}
            <button onClick={playAudio}>Play audio</button> 
            <section>
                <form id="form" onSubmit={handleAnswerSubmit}>
                    <label htmlFor="guess">Your guess:</label>
                    <input type="text" id="guess"></input>
                    <button type="submit">Check</button>
                </form>
                { lastWordCheck ? <Link to={`/student/${topic.title}/completed`}><button className="next-button" onClick={updateAccount} hidden>Complete Topic!</button></Link> :
                <button className="next-button" onClick={handleButtonClick} hidden>Next word</button>}
            </section>
            <section>
                <h2 id="correct-text" hidden></h2>
            </section>
        </div>
    );
};

export default AudioGame;