const baseURL = 'http://localhost:5000/api/topics';

const TopicService = {
    getTopics() {
        return fetch(baseURL)
        .then(res => res.json())
    },

    addTopic(topic) {
        return fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(topic),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json());
    }
}

export default TopicService;