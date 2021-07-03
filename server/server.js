const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('helpers/create_router.js');
const cors = require('cors')

app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://localhost:27017', (client) => {
    const db = client.db('education_hub');
    const accountCollection = db.collection('account');
    const accountRouter = createRouter(accountCollection);
    app.use('/api/account', accountRouter);
});

app.listen(5000, function() {
    console.log(`Listening on port ${ this.address().port}`);
});