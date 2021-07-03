use education_hub;
db.dropDatabase();

db.account.insertMany([
    {
        parent: {
            name: "Sue",
            email: "sueparker@hotmail.com"
        },
        student: {
            name: "Sara",
            age: 6,
            learning_status: {
                animals: "not started",
                vehicles: "complete"
            }
        }
    },

])