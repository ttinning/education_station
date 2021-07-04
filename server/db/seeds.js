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
            completed_topics: [
                {
                    title: "animals",
                    words_first_time: ["tiger", "dog"]
                }
            ]
        }
    },
])

db.topics.insertMany([
    {
        title: "animals",
        word_list: ["tiger", "dog", "cat", "koala", "chicken", "turtle", "whale", "owl", "rooster", "pigeon", "zebra", "fox"]
    },
    {
        title: "vehicles",
        word_list: ["car", "train", "aeroplane", "bicycle", "crane", "motorbike", "tram", "lorry", "tractor", "scooter", "helicopter", "boat"]
    }
])