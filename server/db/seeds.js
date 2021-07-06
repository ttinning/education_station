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
            trophies: {
                animals: ["audio"]
            }
        }
    },
])

db.topics.insertMany([
    {
        title: "animals",
        word_list: ["tiger", "cat", "dog", "turtle", "chicken", "koala", "whale", "owl", "rooster", "pigeon", "zebra", "fox"],
        background_image: ''
    },
    {
        title: "vehicles",
        word_list: ["car", "train", "aeroplane", "bicycle", "crane", "motorbike", "motorbike", "motorbike", "motorbike", "motorbike"],
        background_image: ''
    }
])