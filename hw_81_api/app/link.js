const express = require('express');
const nanoid = require('nanoid');
const Link = require('../models/Link');


const router = express.Router();

router.get('/:id', (req, res) => {
    Link.findOne({shortURL: req.params.id})
        .then(result => {
            if (result) return res.status(301).redirect(result.originalURL);
            res.sendStatus(404)
        })
        .catch(() => res.sendStatus(500));
});

router.post('/', (req, res) => {
    const linkData = req.body;
    linkData.shortURL = nanoid(7);
    const link = new Link(linkData);
    link.save()
        .then(result => res.send(result.shortURL))
        .catch(error => res.sendStatus(400).send(error));
});


module.exports = router;