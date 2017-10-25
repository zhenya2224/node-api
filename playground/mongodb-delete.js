

const {MongoClient,ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server')
    }
    console.log('Connected to MongoDB server')


    //delete many

    // db.collection('Todos').deleteMany({text:'Eat supper'}).then((result)=>{
    //     console.log(result)
    // });


    //deleteOne

    // db.collection('Todos').deleteOne({text:'Eat supper'}).then((result)=>{
    //     console.log(result)
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result)
    // });

    db.collection('Users').deleteMany({name:'Evhen'}).then((result)=>{
        console.log(result)
    });
    db.collection('Users').findOneAndDelete({_id:new ObjectID('59f0686a71a3e30a4092b169')}).then((result)=>{
        console.log(result)
    });

    //db.close();
})