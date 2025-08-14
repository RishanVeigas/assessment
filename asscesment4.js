 const students = [
  { name: "Amit Sharma", age: 19, course: "B.Tech" },
  { name: "Priya Verma", age: 22, course: "MCA" },
  { name: "Rohit Gupta", age: 20, course: "BCA" },
  { name: "Neha Singh", age: 23, course: "B.Sc" },
  { name: "Karan Patel", age: 18, course: "B.Com" }
 ];

 const gettable=document.getElementById("table");
 const fetchtable=async()=>{
 students.forEach(el=> {
        const row=gettable.insertRow();

        const name=row.insertCell(0);
        const age=row.insertCell(1);
        const course=row.insertCell(2);

       
        name.textContent=el.name;
        age.textContent=el.age;
        course.textContent=el.course;

});
}
fetchtable();

const button1= document.getElementById("button1");
let ison=true;
button1.addEventListener("click",()=>{
    ison=!ison;
    ison ? document.body.style.backgroundColor="lightgray" : document.body.style.backgroundColor="lightblue";
});

const button2= document.getElementById("button2");
let tablevisibility=true;
const table=document.getElementById("section2");
button2.addEventListener("click",()=>{
    tablevisibility=!tablevisibility;
    if(tablevisibility ){
        table.style.display="block" ; 
    }
    else{
        table.style.display="none";
    }
    
})


