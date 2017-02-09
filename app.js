var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var reverse = require('reverse-string');

app.get('/',function(req, res){//get,put,post,delete   
      res.sendFile(__dirname + '/index.html');
});

io.on('connection' , function(socket){
	console.log('Client Connected');
	socket.on('text' , function(data){
		console.log(data);
		var revstring = reverse(data);
		socket.emit('revstring' , revstring)	
	});
});

http.listen(3000 , function(){
	console.log('Listening on 3000');
});
