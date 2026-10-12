const getCon = require('./connection');

// function read(){
//     getCon().then((ob=>{
//         const {client,db} = ob;
//         db.collection('student').find().toArray().then((rec)=>{
//             client.close();
//             console.log(rec);
//         }
//     })
//     ).catch((err)=>{console.log(err);}
//     );
// }

async function read(){
    const {client,db} = await getCon();
    const rec = await db.collection('students').find().toArray();
    console.log(rec);
    client.close();
}

read();