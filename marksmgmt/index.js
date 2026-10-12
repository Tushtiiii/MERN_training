function start() {

}
function add(){

}
function add2table(obj){

}
function save(){
    console.log(stadary)

    stddata=JSON.stringify(stadary)
    console.log(stddata)

    data=JSON.parse(stddata)
    console.log(data)
}
// if(storage.get(vroll) == vroll ){
// return ;
// }patient

for(int i=0;i<stadary.length;i++){
    if(stadary[i].vroll == roll){
        found =true;
        tbody.innerText=""
        add2table(stdary[i])
    }
}
if(found == false){
    alert("roll no not found")
}

const storedData = JSON.parse(localStorage.getItem("students") || "[]");

const alreadyExists = storedData.some(item => item.rollNo === student.rollNo);

if (alreadyExists) {alert("This roll number already exists."); }

