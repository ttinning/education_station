const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function(collection) {

    const router = express.router();

    router.get('/', (req, res) => {
        collection
        .find()
        .toArray()
        .then((docs) => res.json(docs))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err })
        });
    });

    router.get('/:id', (req, res) => {
        const id = req.params.id;
        collection
        .findOne({ _id: ObjectID(id) })
        .then((doc) => res.json(doc))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err })
        });
    });

    router.post('/', (req, res) => {
        const newData = req.body;
        collection
        .insertOne(newData)
        .then((result) => {
            res.json(result.ops[0])
        })
        .catch((err)=> {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err })
        });
    });

    router.delete('/:id', (req, res) => {
        const id = req.params.id;
        collection
        .deleteOne(
            { _id: ObjectID(id) }
        )
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err })
        });
    });

    router.put('/:id', (req, res) => {
        const id = req.params.id;
        const updatedData = req.body;
        collection
        .updateOne(
            { _id: ObjectID(id) },
            { $set: updatedData }
        )
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err })
        });
    });
}

module.exports = createRouter