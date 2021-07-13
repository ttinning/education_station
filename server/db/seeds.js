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
                food: {
                    quiz: false,
                    drag: true,
                    audio: true
                },
                instruments: {
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
        title: "food",
        word_list: ["grape", "egg", "tomato", "onion", "mango", "apple", "fig", "peach", "meat", "cherry"],
        background_image: ""
    },
    {
        title: "instruments",
        word_list: ["harp", "guitar", "violin", "piano", "banjo", "cello", "saxophone", "flute", "trumpet", "tuba"],
        background_image: ""
    }
])