import AudioService from "../../services/AudioServices";
import { useState, useEffect } from "react";

const Word = ({word}) => {

    const [wordAudioAPI, setWordAudioAPI] = useState({});

    useEffect(() => {
        AudioService.getWordAudioAPI(word)
            .then(res => setWordAudioAPI(res))
    }, []);

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

    

    return (
        <div>
            <div>
                <li>{word}</li>
                <a href={audioLink.link} target="_blank">{audioLink.text}</a>
            </div>
        </div>
    )
};

export default Word;