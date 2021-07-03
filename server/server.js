const express = require('express');
const app = express();
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const cors = require('cors')

app.use(express.json());
app.use(cors());

MongoClient.connect('mongodb://localhost:27017').then((client) => {
    const db = client.db('education_hub');
    const accountCollection = db.collection('accounts');
    const accountRouter = createRouter(accountCollection);
    app.use('/api/accounts', accountRouter);
}) .catch(console.error);

MongoClient.connect('mongodb://localhost:27017').then((client) => {
    const db = client.db('education_hub');
    const topicCollection = db.collection('topics');
    const topicRouter = createRouter(topicCollection);
    app.use('/api/topics', topicRouter)
}) .catch(console.error)

app.listen(5000, function() {
    console.log(`Listening on port ${ this.address().port}`);
});