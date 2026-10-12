const{MongoClient} = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');

// function fetch(){
//     client.connect().then(
//         ()=>{
//             const db = client.db('testdb');
//             db.collection('student').find().toArray().then((rec)=>{
//                 console.log(rec);
//                 client.close();
//             })
//         }
//     ).catch((err)=>{console.log(err);})
// }
// fetch();

async function fetch(){
    try{
        await client.connect();
        const db = client.db('mydatabase');
        const rec = await db.collection('students').find().toArray();
        console.log(rec);
        console.log('Data fetched successfully');
    }
    catch(err){
        console.log(err);
    }
}

fetch();