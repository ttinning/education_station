import { useState, useEffect } from "react";
import AudioService from "../../services/AudioService";

const AudioGame = function() {

    const [focusWord, setFocusWord] = useState("");

    const audioWordList = ["cat", "dog", "koala"];
////
    const [wordAudioAPI, setWordAudioAPI] = useState([]);


    const getAudioLink = () => {      
        if (wordAudioAPI[0]) {
            const audioLink = wordAudioAPI[0].phonetics[0].audio;
            return {    link: audioLink,
                        text: "click to listen"
                    };
        } else {
            return {    link: null,
                        text: "no link available"
                    };
        };
    };

    const audioLink = getAudioLink();
    ///

    

    useEffect(() => {
        setFocusWord(audioWordList[0]);
    }, []);

    const handleButtonClick = function() {
        const currentFocusWordIndex = audioWordList.indexOf(focusWord);
        console.log("current", focusWord, currentFocusWordIndex);
        console.log(audioWordList.length);
        if (currentFocusWordIndex < audioWordList.length - 1) {
            const nextFocusWordIndex = currentFocusWordIndex + 1
            const nextFocusWord = audioWordList[nextFocusWordIndex];
            console.log("next word", nextFocusWord);
            setFocusWord(nextFocusWord);
        } else {console.log("end of list");}
    };
    

    


    return (
        <div>
            <h3>Can you spell these animal words?</h3>
            {focusWord}
            <button onClick={handleButtonClick}>Next word</button>
        </div>
    );
};

export default AudioGame;