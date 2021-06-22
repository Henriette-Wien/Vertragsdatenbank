const express = require("express");
const router = express.Router();
const Vertrag = require("../models/vertragModels");


router.route("/create").post((req, res) => {

    const name = req.body.name;
    const bedingung = req.body.bedingung;
    const kosten = req.body.kosten
    const newVertrag = new Vertrag({
        name,
        bedingung,
        kosten
    });

    newVertrag.save();

})

router.route("/Vertrag").get((req, res) => {

    Vertrag.find().then(foundVertrag => res.json(foundVertrag))

})

module.exports = router;