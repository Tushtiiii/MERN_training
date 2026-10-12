const getcon = require('./connection');

async function search(){
    const {client,db} = await getcon();
    const rec = await db.collection('students').find({name:'Priya Patel'}).toArray();
    console.log(rec);
    client.close();
}

search();