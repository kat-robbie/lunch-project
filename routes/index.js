var express = require('express')

var db = require('../db')

module.exports = {
  getHome: getHome,
  showForm: showForm,
  saveForm: saveForm,
  getLunch: getLunch,
  getIndividual: getIndividual,
  budgetFilter: budgetFilter,
  budgetOptions: budgetOptions
}

function getHome (req, res) {
  res.render('home.hbs')
}

function showForm (req, res) {
  res.render('submitlunch.hbs')
}

function saveForm (req, res) {
  db.saveForm(req.body)
  .then(function (result) {
    res.redirect('/lunch/' + result[0])
  })
}

function getLunch (req, res) {
  db.getLunch()
    .then(function (lunch) {
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

function budgetFilter (req, res) {
  res.render('money.hbs')
}

function budgetOptions (req, res) {
  db.budgetOptions(req.body)
  .then(function(result) {
    res.redirect('/money/' + result[0])
  })

}

// .filter(function(type){
//        return type.abv > '5'
//        })
//        .map(function(type){
//        return (
//        {type.name}
