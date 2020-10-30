// this is a collection, looks like a dictionary and javascript/ to insert
//db.users.push({})
db.users.insert({name: 'Morley', email:'m@t.com'})

//db.users.find().pretty()  <- chaining
// unique id 'ObjectID("2rwefsdfs")

db.users.insert({name: 'Jimmy'})

//db.users.find().pretty()  doesnt show email, doesnt care

db.users.insert({name: 'Jimmy', interests: ['Bitcoin', 'biking', 'hiking']})

//to find or to find id use the ObjectID i.e. {_id: ObjectID("34242dssf")}
db.users.find({name: 'Jimmy'})

//filter
db.users.find({ age: { $gt:20 }})
db.users.find({ age: { $lt:20 }})

//find one document
db.users.findOne({ age: { $gt:20 }})

//delete document
db.users.deleteOne({_id: ObjectId('5dasdklj') })
//should be acknowledge to confirm 

//update
db.users.UpdateOne({ _id: ObjectId('hjskfhkjsh') }, { $set: { name: 'James' } })
//should say modified

//drop/delete collection
db.users.dropCollection()

//delete database
db.dropDatabase()

//add a field to everyone
db.users.update({}, $set: { email: 'm@t.com'}}, false, true)
//or
db.users.updateMany ({}, $set: { newKey: 'new val'}})


//filter first and add a field to that filter
db.users.updateMany ({ age: { $gt: 20}}, $set: { age: 'You are old!'}})

//change a key/ update key
db.users.updateOne({ _id:ObjectId("5skfjsdklfj") }, { $rename: { newKey:'newNEWKEY' }})

//adding input into array like into interest example
db.users.updateOne({_id: ObjectId('dadada') }, { $push: { interests:'coding'}} )

//setting it to a variable
var jimmy = db.users.findOne({_id: ObjectId("5sfddfg")})
//would gi everything about jimmy