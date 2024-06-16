const express = require('express');
const mongojs = require('mongojs');

const db = mongojs('vezbamdb1', ['users']);
const app = express();


app.get('/api/users', (req, res) =>{
    db.users.find((err, docs) =>{
        res.json(docs);
    })
});

app.listen(3000, () =>{
    console.log('Running on 3000');
})