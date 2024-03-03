const express = require('express');
const app = express();

app.get("/", (_req, res) => {
	res.status(200).write("Damar first app using VPS!")
	res.end()
})

console.log("TEST")
console.log("TEST")
console.log("TEST")

app.get('/users', (_req, res) => {
  res.status(200).write("Ini get users")
	res.end()
})

module.exports = app;