const students = [
  {
    id: 1,
    name: "Amit Sharma",
    age: 20,
    course: "Computer Science",
    marks: 85,
    feesPaid: true,
  },
  {
    id: 2,
    name: "Priya Singh",
    age: 22,
    course: "Information Technology",
    marks: 92,
    feesPaid: false,
  },
  {
    id: 3,
    name: "Ravi Kumar",
    age: 19,
    course: "Electronics",
    marks: 76,
    feesPaid: true,
  },
  {
    id: 4,
    name: "Neha Verma",
    age: 21,
    course: "Mechanical",
    marks: 88,
    feesPaid: true,
  },
  {
    id: 5,
    name: "Sohan Lal",
    age: 23,
    course: "Civil Engineering",
    marks: 65,
    feesPaid: false,
  },
  {
    id: 6,
    name: "Anjali Mehta",
    age: 20,
    course: "Computer Science",
    marks: 95,
    feesPaid: true,
  },
  {
    id: 7,
    name: "Vikas Gupta",
    age: 22,
    course: "Information Technology",
    marks: 58,
    feesPaid: false,
  },

  {
    id: 8,
    name: "Pooja Mishra",
    age: 19,
    course: "Mechanical",
    marks: 80,
    feesPaid: true,
  },

  {
    id: 9,
    name: "Rajesh Khanna",
    age: 21,
    course: "Electronics",
    marks: 70,
    feesPaid: false,
  },

  {
    id: 10,
    name: "Sneha Kapoor",
    age: 22,
    course: "Civil Engineering",
    marks: 90,
    feesPaid: true,
  },
];
//Map question
//1 question
let a=students.map (el =>el.name);
console.log(a);

//2 question

let b=students.map ((el) =>{
  return  {name:el.name,course:el.course};
});
console.log(b);

// 3 question
const c = students.map((el) => {
    const newStudent = el; 
    newStudent.status = newStudent.marks >= 60 ? "Pass" : "Fail";
    return newStudent;
});
console.log(c);


// 4 question

const d=students.map(el=>{
   return el.name+" - "+el.course;    //`${el.name} - ${el.course}`;
})
console.log(d);

// 5 question

const e=students.map((el)=>{
   const student=el;
   student.marks+=5;
   return student;
})
console.log(e);

// Filter

//1 question
const f=students.filter((el)=> el.course="Computer Science");
console.log(f);

// 2 question
 const g=students.filter((el)=> el.marks>60);
 console.log(g);

// 3 question
 const h=students.filter(el=> !(el.feesPaid));
 console.log(h);

// 4 question
const age=students.filter(el=> el.age>20 && el.marks>70);
 console.log(age);

// 5 question
 const cage=students.filter(el=>  el.course=="Mechanical" && el.marks<=85);
 console.log(cage);

// reduce
// 1 question
const tmark=students.reduce((a,e)=>{
      return a+=e.marks;
},0);
console.log(tmark);

//2 question
  const amark=students.reduce((a,e)=>{
       return a+=e.marks;
 },0);
console.log(amark/students.length);

//3 question

const paidfee=students.reduce((a,e)=>{
      if(e.feesPaid == true){
          a=a+1;
      }
      return a;
},0);
console.log(paidfee);

//4 question
const highest = students.reduce((a, e) => {
  if (e.marks > a) {
    a = e.marks;
  }
  return a;
}, 0);
console.log(highest);

//5 question
const obj=students.reduce((a,e)=>{
     (a[e.course]= a[e.course] || []).push(e);
     return a;
},{});

console.log(obj);
