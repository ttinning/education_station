import { useState, useEffect } from "react";
import AudioService from "../../services/AudioService";
import { useLocation, Link } from "react-router-dom"

const AudioGame = function() {

    const data = useLocation();
    const topic = data.state.topic;
    const accounts = data.state.accounts;
    const audioWordList = topic.word_list;

    const [focusWord, setFocusWord] = useState(audioWordList[0]);
    const [wordAudioAPI, setWordAudioAPI] = useState({});
    const [wrongCounter, setWrongCounter] = useState(0);
    const [correctWordStore, setCorrectWordStore] = useState([]);
    const [incorrectWordStore, setIncorrectWordStore] = useState([]);
  
   

    const checkLastWord = () => {
        return audioWordList.indexOf(focusWord) === audioWordList.length - 1;
    };

    let lastWordCheck = checkLastWord();

    
    
    useEffect(() => {
        AudioService.getWordAudioAPI(focusWord)
            .then(res => setWordAudioAPI(res))
    }, [focusWord]);

    useEffect(() => {
        playAudio();
    }, [wordAudioAPI]);

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
        const form = document.querySelector('#form')
        form.hidden = false;
        
        if (currentFocusWordIndex < audioWordList.length - 1) {
            const nextFocusWordIndex = currentFocusWordIndex + 1
            const nextFocusWord = audioWordList[nextFocusWordIndex];
            setFocusWord(nextFocusWord);
            nextButton.hidden = true;
        } else {
            nextButton.textContent = "Finish topic";
        };
        setWrongCounter(0);        
        const text = document.querySelector('#correct-text');
        text.hidden = true;
        
        form.reset();
        
    };

    const playAudio = () => {
        const audio = new Audio(audioLink);
        audio.play();
    };

    const handleAnswerSubmit = (evt) => {
        evt.preventDefault();
        const guess = evt.target.guess.value.toLowerCase().trim();
        const text = document.querySelector('#correct-text');
        const nextButton = document.querySelector('.next-button');
        const form = document.querySelector('#form');
        text.hidden = false;
        if (guess === focusWord.toLowerCase()) {
            text.textContent = "That's Correct!!!"
            nextButton.hidden = false;
            form.hidden = true;
            if (!correctWordStore.includes(focusWord)) {
                const newCorrectWordStore = [...correctWordStore, focusWord];
                setCorrectWordStore(newCorrectWordStore);
            };
            if (incorrectWordStore.includes(focusWord)) {
                let temp = [...incorrectWordStore]
                let newIncorrectWordStore = temp.filter((word) => {
                    return word !== focusWord;
                });
                setIncorrectWordStore(newIncorrectWordStore);
            }
        } else {  
            text.textContent = `Try again. ${2-wrongCounter} more guesses left`
            setWrongCounter(wrongCounter + 1);
            if (wrongCounter >= 2 ) {
                nextButton.hidden = false;
                form.hidden = true;
                text.hidden = true;
                if (!incorrectWordStore.includes(focusWord)) {
                    const newIncorrectWordStore = [...incorrectWordStore, focusWord];
                    setIncorrectWordStore(newIncorrectWordStore);
            }
            
            };  
        };
        form.reset();
    };

    const getSummaryCorrect = () => {
        const tempCorrect = [...correctWordStore];
        const correctWordsListItems = tempCorrect.map(word => <li>{word}</li>);
        return correctWordsListItems;
    };

    const correctWordsListItems = getSummaryCorrect();

    const getSummaryIncorrect = () => {
        const tempIncorrect = [...incorrectWordStore];
        const incorrectWordsListItems = tempIncorrect.map(word => <li>{word}</li>);
        return incorrectWordsListItems;
    };

    const incorrectWordsListItems = getSummaryIncorrect();
 
    const returnContent = () => {
        if (wordAudioAPI[0]) {
            return (
            <div id="audio-wrapper">
                <h2>{topic.title}</h2>
                <h3>Can you spell these words?</h3>
                <h4>You will need some headphones, or your speakers switched on!</h4>
                <div id="play-button-and-summary">
                    <button id='play-audio-button' onClick={playAudio}>Play audio</button>
                    <section className="summary">
                        { correctWordStore.length > 0 ? <div>
                            <h3>Words you can spell:</h3>
                            <ul className="lists">
                                {correctWordsListItems}
                            </ul>
                        </div> : null}
                    
                        { incorrectWordStore.length > 0 ? <div>
                            <h3>Words to learn:</h3>
                            <ul className="lists">
                                {incorrectWordsListItems}
                            </ul>
                        </div> : null}
                    </section>
                </div>
                <section>
                    <form id="form" onSubmit={handleAnswerSubmit}>
                        <label htmlFor="guess">Your guess:</label>
                        <input type="text" id="guess" spellCheck = "false"></input>
                        <button id="check-button" type="submit">Check</button>
                    </form>
                    { lastWordCheck ? <Link to={{
                        pathname: `/student/audio/${topic.title}/completed`,
                        state: {accounts}
                    }}><button className="next-button" hidden>Complete Topic!</button></Link> :
                    <button className="next-button" onClick={handleButtonClick} hidden>Next word</button>}
                </section>
                <section>
                    <h2 id="correct-text" hidden></h2>
                </section>
                
            </div>
            )
        }
        else {
            return <p>Sorry, not all of the words are available to play in this game.  Try choosing another from your dashboard</p>

        }
    };

    
    return (
        <div>
            {Object.keys(wordAudioAPI).length > 0 ? returnContent() : null}
        </div>
        
    );
};

export default AudioGame;