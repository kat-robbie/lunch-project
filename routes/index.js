var express = require('express')

var db = require('../db')

module.exports = {
  getHome: getHome,
  showForm: showForm,
  showLunch: showLunch
}

function getHome (req, res) {
  res.render('home.hbs')
}

function showForm (req, res) {
  res.render('submitlunch.hbs')
}

function showLunch (req, res) {
  res.render('lunch.hbs')
}


// function get (req, res) {
//   db.getUsers()
//     .then(function (users) {
//       res.render('index', { users: users })
//     })
//     .catch(function (err) {
//       res.status(500).send('DATABASE ERROR: ' + err.message)
//     })
// }
