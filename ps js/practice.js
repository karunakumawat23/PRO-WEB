// let  name = "karuna";
// let reversed = "";

// for (let i = name.length-1; i>=0; i--){
//     reversed+= name[i];

// } console.log(name);



// let n = 121; 
// let original_n = n;
// let r = 0;   

// while (n > 0) {
//     let remainder = n % 10; 
//     r = r * 10 + remainder;
//     n = Math.floor(n / 10); 
// }
// console.log(r)
// if(r == original_n){
//     console.log("This is a palindrome number");
// }else {
//     console.log("This is not a palindrome number");
// }


// let A =[1,1,1,1];
// let count = 0;
// let max = 0;

// for(i=0; i<A.length; i++){
//       if(A[i]=1){
//         count+=1;
//         if(count>max){
//             max = count;
//         }
//       } else{
//         count = 0;
//       } 
// }
// console.log(max);


// let nums = [2, 2, 1,1];
// let result = 0;

// for (let i = 0; i < nums.length; i++) {
//   result ^= nums[i]; 
// }

// console.log(result); 

// let arr = [1,2,1,2,3];
// let number ;

// for(let i = 0; i< arr.length; i++){
//   let count = 0;

// for(let j = 0; j< arr.length; j++){
//   if(arr[i]==arr[j]){
//     count++;
// }
// if(count==1){
//   let number=arr[i];
// }

// }
// }
// console.log(number);

// let arr =[1,2,3,4,5];
// let sum =0;
// for(let i=0; i<arr.length;i++){
//   sum = arr[i]+sum;
// } 
//   console.log(sum);

// let arr = [10, 15, 20, 25, 30];
// var even_sum=0;
// var odd_sum=0;


// for(let i=0; i < arr.length; i++){
//  if(arr[i]%2==0){
//   even_sum = even_sum + arr[i];
//  }
//  else{
//   odd_sum = odd_sum + arr[i];
//  }
// }console.log(even_sum);
// console.log(odd_sum);

// const readline = require ("readline-sync");
// const number = readline.question("Enter the Number: ");
// console.log(number*number);

// const readlineSync = require('readline-sync');

// let n = parseInt(readlineSync.question('Enter the number of elements in the array: '));

// let array = [];


// for (let i = 0; i < n; i++) {
//     array[i] = readlineSync.question(`Enter element ${i + 1}: `);

// }

// console.log('Your array is:', array);

 

// const readline = require ("readline-sync");
// const number =  readline.question("enter the number;");
// let reversed = []
// let array = []
// for (i =0; i>=number; i++){
//     array [i]=readline.question(`enter element ${i+1}`);
// }
// j=0;
// for (i =0; i>=number; i--){
//     j++;
// }console.log(reversed);

// const accountCode=1234;
// let accountNum=2311;
// var accountCity="ujjain";

// console.log(accountCode);

// accountNum = 3333;
// accountCity = "dewas";
// accountId = "12345karu";

// console.table([accountNum,accountCode,accountCity,accountId])

// let n  =-121;
// let r =0;
// while(n>0){
//     let remainder = n%10;
//     r = r * 10 + remainder;
//     n = Math.floor(n/10);
// }
// console.log(r);

// fibanacci series 
let n = 6;
let a = 0;
let b = 1;
for(let i = 2; i<=n; i++){
    c =  a + b;
    console.log(c);
    a = b ;
    b = c ;
}



