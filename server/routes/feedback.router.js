const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    console.log('GET /feedback');
    pool.query(`SELECT * from "feedback" ORDER BY id DESC;`).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET /feedback', error)
        res.sendStatus(500);
    });
})
router.post('/', (req, res) => {
    console.log('POST')
    console.log('this is req.body', req.body)
    let feeling = req.body.feeling
    understanding = req.body.understanding
    support = req.body.support
    comment = req.body.comment
    sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`
    pool.query(sqlText, [feeling, understanding, support, comment])
        .then((result) => res.sendStatus(201))
        .catch((err) => {
            console.log('this is error in post,', err);
            res.sendStatus(500);
        })
})

router.delete('/:id', (req, res) => {
    let sqlText = `DELETE FROM feedback WHERE id=$1`
    let id = req.params.id;
    pool.query(sqlText, [id])
        .then(result => {
            res.sendStatus(200)
        }).catch(err => {
            console.log('error in delete request', err)
            res.sendStatus(418)

        })
})
module.exports = router;