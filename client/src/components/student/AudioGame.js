import { useState, useEffect } from "react";
import AudioService from "../../services/AudioService";

const AudioGame = function() {

    const audioWordList = ["cat", "dog", "koala"];

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
        const currentFocusWordIndex = audioWordList.indexOf(focusWord);
        console.log(wordAudioAPI);
        if (currentFocusWordIndex < audioWordList.length - 1) {
            const nextFocusWordIndex = currentFocusWordIndex + 1
            const nextFocusWord = audioWordList[nextFocusWordIndex];
            setFocusWord(nextFocusWord);
        } else {console.log("end of list");}
    };
    

    


    return (
        <div>
            <h3>Can you spell these animal words?</h3>
            {focusWord}
            {audioLink}
            
            <button onClick={handleButtonClick}>Next word</button>
        </div>
    );
};

export default AudioGame;