const express = require("express");
const vacationsRouter = express.Router();
const Vacation = require("../models/vacations");

vacationsRouter.route("/")
    .get((req, res) => {
        Vacation.find((err, vacations) => {
            if(err) return res.status(500).send(err);
            return res.status(200).send(vacations);
        })
    })
    .post((req, res) => {
        const vacation = new Vacation(req.body);
        vacation.save((err, newVacation) => {
            if(err) return res.status(500).send(err);
            return res.status(201).send(newVacation);
        })
    })

vacationsRouter.route("/:id")
    .get((req, res) => {
        Vacation.findById(req.params.id, (err, vacation) => {
            if(err) return res.status(500).send(err);
            return res.status(200).send(vacation);
        })
    })
    .put((req, res) => {
        Vacation.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedVacation) => {
            if(err) return res.status(500).send(err);
            return res.send(updatedVacation);
        })
    })
    .delete((req, res) => {
        Vacation.findByIdAndRemove(req.params.id, (err, deletedVacation) => {
            if(err) return res.status(500).send(err);
            return res.send({message: "The following vacation has been successfully deleted from the database", deletedVacation});
        })
    })

    module.exports = vacationsRouter;