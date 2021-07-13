import randomToken from "./auth";

const baseURL = 'https://owlbot.info/api/v4/dictionary/';

const getHeaders = {
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${randomToken}`
    }
}

const WordService = {
    getWordInfo(word) {
        return fetch(baseURL + word, getHeaders)
        .then(res => res.json());
    }
}

export default WordService;

// curl --header "Authorization: Token YOUR_TOKEN" https://owlbot.info/api/v4/dictionary/owl