const express = require("express");
const faker = require('faker');
const app = express();

app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser");
});


class User{
    constructor(_id, firstName, lastName, phoneNumber, email, password){
        this.id= id 
        this.firstName = firstName
        this.lastName = lastName
        this.phoneNumber = phoneNumber
        this.email = email
        this.password = password
    }
}

class Company{
    constructor(){
        super();
        this.id
    }
}

// return new user
app.get('/api/users/new', (req, res) => {
    res.json({
        user:{
            id: +req.params.id,
            
        }
    });
});

//return new company
app.get('/api/companies/new', (req, res) => {
    res.json({

    });
});

//return both new and company
app.get('/api/users/company', (req, res) => {
    res.json({

    });
});

//run server
const server = app.listen(8000, () =>
  console.log(`Server is locked and loaded on port ${server.address().port}!`)
);