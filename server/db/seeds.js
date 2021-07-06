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

            topics_trophies: {
                animals: {
                    quiz: false,
                    drag: false,
                    audio: true
                },
                vehicles: {
                    quiz: false,
                    drag: true,
                    audio: true
                }
            }
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