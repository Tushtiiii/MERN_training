const getCon = require('./connection');

async function update(obj){
    const {client,db} = await getCon();
    const rec = await db.collection('students').updateOne({name:obj.name},{$set:{roll:obj.roll,sem:obj.sem,course:obj.course,marks:obj.marks}});
    console.log(rec);
    client.close();
}

update({name:'Tushtee Kothare',roll:121,sem:6,course:'MERN Stack',marks:90});