// express become a node.module or retrieve/import and invoke express from node 
const express = require('express');

// express is a unction to create an app
const app =express();

//next is to move to the next line which take it to the next 'app.'
app.use((request, response, next) => {
    console.log('inside middleware');
    next();
})

//allows us to read regular form data (post request)
app.use(express.urlencoded({ extended: true }));
//to give access to give body, invoke json function and app.use (THIS IS CALLED EXPRESS MIDDDLE WARE)
app.use (express.json());

//making a get request
app.get('/', (request, response) => {
    //reponse object that sending a json string/ response means we're done calling. ***res.json allows us to send data back as json
    //res.send allows us to send data back as text or html
    response.json({ message: 'Hello from Express!' });
});

//get request for all the stores
//user makes a 'get' request to this route, and then callback get invoked
app.get('/api/stores', (request, response)=> {
    response.json({ 
        //making a array of stores
        stores: [{
            name: "Ralph's",
            address: '123456 Ave St'
        }]
     });
});

//to get a specific store/ one store
app.get('/api/stores/:id', (request, response) =>{
    response.json({
        //making an object with a ky inside called store and the value of the store 'name,address'
        store: {
            //to get the id that was pass in through the request
            //req.params is a special object with key/value pairs for all the route parameters
            id: +request.params.id,
            name: "Ralph's",
            address: '123456 Ave St'
        }
    })
})

//making a post request which her is making a store
app.post('/api/stores', (request,response) => {
    console.log('This is the request body!', request.body);
    response.json({ message: 'Store created!' });
});

//delete a http request/ delete a store
app.delete('/api/stores/:id', (request, response)=> {
    //params represent all the path variable which is the id in this case
    console.log(request.params);
    response.json({ message: 'Deleted store with id' + request.params.id });
});

//update the store
app.put('/api/stores/:id', (request, response)=>{
    //log to body to see
    console.log(request.body)
    response.json({
        store:{
            id: request.params.id,
            name: "Trader Joe's",
            address: '123456 Ave St'
        }
    });
});

//use/runs the server by listening to the connection
app.listen(8000, ()=> console.log('listen to 8000'));
