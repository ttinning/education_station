use education_hub;
db.dropDatabase();

db.accounts.insertMany([
    {
        parent: {
            name: "Sue",
            email: "sueparker@hotmail.com"
        },
        student: {
            name: "Sara",
            age: 6,
            completed_topics: ["animals"]
        }
    },
])

db.topics.insertMany([
    {
        title: "animals",
feature/audio-game
        word_list: ["tiger", "dog", "cat", "koala", "chicken", "turtle", "whale", "owl", "rooster", "pigeon", "zebra", "fox"]
        background_image: ''

    },
    {
        title: "vehicles",
        word_list: ["car", "train", "aeroplane", "bicycle", "crane", "motorbike", "motorbike", "motorbike", "motorbike", "motorbike"],
        background_image: ''
    }
])