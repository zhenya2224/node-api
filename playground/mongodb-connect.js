// const MongoClient = require('mongodb').MongoClient

const {MongoClient,ObjectID} = require('mongodb')

//
// var obj = new ObjectID()
// console.log(obj)
// console.log(MongoClient)

// var user = {name:'evhen',age:31};
// var {name} = user;
//
// console.log(name)

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')

    // db.collection('Todos').find({
    //     _id:new ObjectID('59f06ff61214755ae605a833')
    // }).toArray().then((docs)=>{
    //     console.log('Todos')
    //     console.log(JSON.stringify(docs,undefined,2))
    // },(err)=>{
    //     console.log('Unable to fetch todos',err)
    // })

    // db.collection('Todos').find().count().then((count)=>{
    //     console.log('Todos count:' + count )
    //     // console.log(JSON.stringify(docs,undefined,2))
    // },(err)=>{
    //     console.log('Unable to fetch todos',err)
    // })
    //
    db.collection('Users').find({name:"Evhen"}).toArray().then((docs)=>{
        console.log('Users')
        console.log(JSON.stringify(docs,undefined,2))
    },(err)=>{
        console.log('Unable to fetch todos',err)
    })


    //db.close();
})