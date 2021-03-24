const express = require('express')

const app = express()

app.get('/', function(request, response) {
	response.send('HOME')
	})

app.get('/about', function(request, response){
	response.send('about')
})

app.get('/users', function(request, response){
	response.send('Get User')
})

app.post('/users', function(request, response){
	response.send('Post User')
})

app.put('/users/:id', function(request, response){
	const id = request.params
	response.send('id')
})

app.delete('/users/:userId', function(request, response){
	response.send('request,params')
})

app.listen(3000, function(){
	console.log('server is okey')
})
