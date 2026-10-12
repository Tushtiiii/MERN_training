const getCon = require('./connection');

function insert(obj){
    getCon().then((ob=>{
        const {client,db} = ob;
        db.collection('students').insertOne(obj).then((rec)=>{
            client.close();
            console.log('Data inserted successfully');
        }).catch((err)=> console.log(err));
    }))
}
insert({roll:121,name:'Tushtee Kothare',sem:7,course:'MERN Stack',marks:90});
