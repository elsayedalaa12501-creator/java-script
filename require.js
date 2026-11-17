// part 1
// question 1 
// let num=Number("123");
// num+=7;
// console.log(num);
// //question 2
// let variable=0;
// if(!variable){
//     console.log("invalid");
// }
// //question 3
// for(let i=1;i<=10;i++){
//     if(i%2==0){
//         continue;
//     }
//     else{
//         console.log(i);
//     }
// }
// //question 4
// let arr=[1,2,3,4,5]
// let result=arr.filter(function(value){
//  return value%2==0;
// })
// console.log(result);
// //question 5
// let arr1=[1,2,3];
// let arr2=[4,5,6];
// let two_arr=[...arr1,...arr2 ];
// console.log(two_arr);
// //question 6
// let day=2;
// switch(day){
//     case 1:console.log( "Sunday");
//     break;
//     case 2:console.log( "Monday");
//     break;
//     case 3:console.log( "Tuesday");
//     break;
//     case 4:console.log( "Wednesday");
//     break;
//     case 5:console.log( "Thursday");
//     break;
//     case 6:console.log( "Friday");
//     break;
//     default:console.log("Saturday");
// }
// //question 7
// let arrr=["a","ab","abc"];
// let resultt=arrr.map(function(value){
//     return value.length;
// })
// console.log(resultt);
// //question 8
// let num1=15;
// if(num1%5==0&&num1%3==0){
//     console.log("Divisible by both");
// }
// else if(num1%5==0){
//     console.log("Divisible by 5");
// }
// else if(num1%3==0){
//     console.log("Divisible by 3");
// }
// else{
//     console.log("not divisiable by 5 and 3");
// }
//question 9
// let numm=5;
// let square=numm =>{return numm*numm};
// console.log(square(numm));
// //question 10
//  const person = {name: 'John', age: 25} 
// function obj(users){
//     let {name,age}=users;
//     console.log(name+" is "+age+" years old");
// }
// obj(person);
//question 11
// function sumttion(...number){
//     let result=0;
//     for(let i=0;i<number.length;i++){
//         result+=number[i];
//     }
//     return result;
// }
// console.log(sumttion(1,2,3,4,5));
//question 12
// function run(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve()
//         }, 3000);        
//     })
// }
// run().then(()=>{
//   console.log("Success");
// });
//question 13
// let arr= [1, 3, 7, 2, 4] ;
// function large(arr){
//     let large_num=0;
//     for(let i=0;i<arr.length;i++){
//      if(arr[i]>large_num){
//         large_num=arr[i];
//      }
//     }
//     return large_num;
// }
// console.log(large(arr));
//question 14
// function key(obj){
//    return Object.keys(obj);
// }
// let object={name:"john",age:25};
// console.log(key(object));
//question 15
// function divide(str){
//      return str.split(" ");
// }
// let str="The quick brown fox" ;
// console.log(divide(str));
// part 2
//question 1
// foreach :use it when i want to run a set of things on the same time , for of: use it like a loop
// question 2
// hosting : moving variable to the top and declare it as undefind ,example: 
// console.log(num);(undefind) because moving num to the top like that var num;
// var num=5;
// console.log(num);(5) 
// tdz : example : 
// let num=5;
// function sum(){
//     let num=3;
//     console.log(num);//num=3 because the scope of function
// }   
// question 3
// == compare valus after converting both to a datatype ,=== compare value and datatype
// question 4
// try_catch : it works that if any function in try error ,it stop try and go to run catch
// question 5
// conversion : converting datatype to another by built in function or method 
// coercion : the language converting datatype behind the scene when find mismatche datatype     