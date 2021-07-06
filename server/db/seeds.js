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
        word_list: ["shark", "dog", "cat", "koala", "turtle", "whale", "owl", "wolf", "fish", "fox"],
        background_image: ''

    },
    {
        title: "vehicles",
        word_list: ["car", "train", "aeroplane", "bicycle", "crane", "motorbike", "motorbike", "motorbike", "motorbike", "motorbike"],
        background_image: ''
    },
    {
        title: "food",
        word_list: ["grape", "egg", "tomato", "onion", "mango", "apple", "fig", "peach", "meat", "cherry"],
        background_image: ""
    },
    {
        title: "instuments",
        word_list: ["harp", "guitar", "violin", "piano", "banjo", "cello", "drums", "flute", "trumpets", "tuba"],
        background_image: ""
    }
])