const http = require('http')

http.createServer((req, res) => {
	res.write("Damar first app using VPS!")
	res.end()
}).listen(3000)

console.log("App running in port 3000")
