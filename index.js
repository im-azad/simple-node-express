const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 5000;

// data parse to json
app.use(express.json());
const users = [
	{ id: 1, name: 'Sakil', email: 'sakil@gmail.com', phone: '01711000001' },
	{ id: 2, name: 'Sagor', email: 'sagor@gmail.com', phone: '01711000002' },
	{ id: 3, name: 'Azad', email: 'azad@gmail.com', phone: '01711000003' },
	{ id: 4, name: 'Alamin', email: 'alamin@gmail.com', phone: '01711000004' },
	{ id: 5, name: 'Saif', email: 'saif@gmail.com', phone: '01711000006' },
];
app.get('/', (req, res) => {
	res.send('Hello this is second node');
});

app.get('/users', (req, res) => {
	res.send(users);
});

// app.Method
app.post('/users', (req, res) => {
	//get data from client side
	const newUser = req.body;
	newUser.id = users.length + 1;
	//push data users with id added
	users.push(newUser);
	console.log('hitting the post', req.body); //client data Sent from within the body
	// res.send(JSON.stringify(newUser))
	res.json(newUser);
});
app.listen(port, () => {
	console.log(`listening on port ${port}`);
});
