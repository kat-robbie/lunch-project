var express = require('express')

var db = require('../db')

module.exports = {
  getHome: getHome,
  showForm: showForm,
  saveForm: saveForm,
  showLunch: showLunch,
  getLunch: getLunch,
  getIndividual: getIndividual
}

function getHome (req, res) {
  res.render('home.hbs')
}

function showForm (req, res) {
  res.render('submitlunch.hbs')
}

function saveForm (req, res) {
  db.saveForm(req.body)
  .then(function () {
    res.redirect('/lunch')
  })
}

function showLunch (req, res) {
  res.render('lunch.hbs')
}

function getLunch (req, res) {
  db.getLunch()
    .then(function (cohort) {
      res.render('lunch.hbs', { lunch: lunch })
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

function getIndividual (req, res) {
  db.getIndividual(req.params.id)
    .select()
    .then(function (result) {
      res.render('individual', result[0])
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}
