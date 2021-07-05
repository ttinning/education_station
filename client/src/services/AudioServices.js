
const baseURL = 'https://api.dictionaryapi.dev/api/v2/entries/en_GB/'

const AudioService = {

    getWordAudioAPI(word) {
        return fetch(baseURL + word)
            .then(res => res.json())
    }
};

export default AudioService;