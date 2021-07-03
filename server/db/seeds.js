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
            learning_status: {
                animals: "not started"
            }
        }
    },
    {
        title: "animals",
        word_list: ["tiger", "dog", "cat", "koala", "chicken", "turtle", "whale", "owl", "rooster", "pigeon", "zebra", "fox"]
    }

])