const express = require('express')
const Vacation = require('../models/vacations')

const vacationsRouter = express.Router()

vacationsRouter.route('/')
	.get((req, res) => {
		Vacation.find({ user: req.user._id }, (err, vacations) => {
			if (err) return res.status(500).send(err)
			return res.status(200).send(vacations)
		})
	})
	.post((req, res) => {
		const vacation = new Vacation(req.body)
		vacation.user = req.user._id
		vacation.save((err, newVacation) => {
			if (err) return res.status(500).send(err)
			return res.status(201).send(newVacation)
		})
	})

vacationsRouter.route('/:id')
	.get((req, res) => {
		Vacation.findOne({
			_id: req.params.id,
			user: req.user._id,
		}, (err, vacation) => {
			if (err) return res.status(500).send(err)
			if (!vacation) return res.status(404).send('No vacation found...')
			return res.status(200).send(vacation)
		})
	})
	.put((req, res) => {
		Vacation.findOneAndUpdate({
			_id: req.params.id,
			user: req.user._id,
		}, req.body, { new: true }, (err, updatedVacation) => {
			if (err) return res.status(500).send(err)
			return res.send(updatedVacation)
		})
	})
	.delete((req, res) => {
		Vacation.findOneAndRemove({
			_id: req.params.id,
			user: req.user._id,
		}, (err, deletedVacation) => {
			if (err) return res.status(500).send(err)
			return res.send({
				message: 'The following vacation has been successfully deleted from the database',
				deletedVacation,
			})
		})
	})

module.exports = vacationsRouter