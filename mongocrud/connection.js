const {MongoClient} = require('mongodb');
const client = new MongoClient('mongodb://localhost:27017');

function getCon(){
    return new Promise((resolve,reject)=>{
    client.connect().then(()=>{
            const db = client.db('mydatabase');
            resolve({client,db});
        }).catch((err)=>reject(err));
   });
}

module.exports = getCon;

