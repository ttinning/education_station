const baseURL = 'http://localhost:5000/api/topics';

const TopicService = {
    getTopics() {
        return fetch(baseURL)
        .then(res => res.json())
    }
}

export default TopicService;