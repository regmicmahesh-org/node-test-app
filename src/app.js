const express = require('express')
const app = express()

const port = parseInt(process.env.PORT) || 3000

const items = []

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html")
});

app.get("/headers", (req, res) => {
	res.send(JSON.stringify(req.headers))
})

app.get("/add" , (req, res) => {
	items.push(items.length + 1)
	res.send(`Sucessfully added ${items[items.length - 1]}.`)
})

app.get("/view" , (req, res) => {
	let initialResponse = "<h1>Your entries"
	for(let i of items){
		initialResponse += `<h4>${i}</h4>`
	}
	res.send(initialResponse)
})

app.listen(port, () => console.log("App is running on 3000"))

