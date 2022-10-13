

// // spread

//  var arr=[1,2,3,4];
//  var arr1=[...arr,10,20];
// console.log(arr1);v

 // rest
//   function sum(...argument){
//       console.log(argument);
//   }
//   let result=sum("A","B","C","D","E")



// // let

// let name ="mani";
// {
// let name = "kandan";
// console.log(name);
// }
// console.log(name); 

// // const

// const myname="nagaraj";
// console.log(myname);


// // var
// console.log(a);   //wrong
// var a=["hello world"];

// var b=["hello world"];   //right
// console.log(b);


// // arrow function
//  var sum=[10];

//  console.log(sum.map(sums=>sums*2));

// //  destucting

//  const profile = {
//     Name: 'virat',
//     age: 30,
//     gender: 'male'    
//  }
// let { Name, age, gender } = profile;
//  console.log(Name);
//  console.log(age);
//   console.log(gender);
// // Promise

// const person=true;

// const p=new Promise((resolve,reject)=>{
//     if(person){
//     resolve("success");
// }
// else{
//     reject("fail")
// }
// })
// p.then((message)=>{
//     console.log("then"+message);
// }).catch((message)=>{
//     console.log("then"+message);
// })

// template littrature

// var name1="mani";
// var name2="B.SC";
// console.log(`im ${name1} completed ${name2}`);








// async&& await function//
// function s(b){
//     return new Promise((res,rej)=>{
// setTimeout(()=>{
//     res()
//     console.log(b)
// },2000)
   
//     })
    
// }
// function a(){
//     return new Promise((res,rej)=>{
//         res()
//         console.log("hello")
//     })
// }
// async function sum(){
//     try{
       
//         await s(10)
//         await a();
//     }
//     catch{console.log("error");}
    
   
// }
// 





// const module = {
//     x: 42,
//     getX: function() {
//       return this.x;
//     }
//   };
  
//   const unboundGetX = module.getX;
//   console.log(unboundGetX()); // The function gets invoked at the global scope
//   // expected output: undefined
  
//   const boundGetX = unboundGetX.bind(module);
//   console.log(boundGetX());