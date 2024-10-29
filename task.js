
function sumNum() {
    let summing = 0;
    for (let i = 1; i <= 10; i++) {
        summing += i;
    }
    document.getElementById("sum").innerHTML = summing;
}
sumNum();

function oddNum(){
    let odd=[];
    let even=[];
for(let i=0;i<=30;i++){
    if(i%2==0){
        even.push(i); 
    }else{
        odd.push(i);
    }
    //console.log(odd)
    document.getElementById("odd").innerHTML = odd;
    document.getElementById("even").innerHTML = even;
}

}
oddNum();


function maxNum() {
    let arr = [1, 45];
    let max = arr[0];
    let min = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }
console.log(max,min)
    document.getElementById("max").innerHTML = `Max: ${max}`;
    document.getElementById("min").innerHTML = `Min: ${min}`;
}
maxNum();

function maxMinNum() {
    let ar = [1, 45,35];
    let ma = ar[0];
    let mi = ar[0];

    for (let i = 1; i < ar.length; i++) {
        if (ar[i] > ma) {
            ma = ar[i];
        } else if (ar[i] < mi) {
            mi = arr[i];
        }
    }
console.log(ma,mi)
    document.getElementById("ma").innerHTML = `Max: ${ma}`;
    document.getElementById("mi").innerHTML = `Min: ${mi}`;
}
maxMinNum();



function numberSum(num,par1, par2) {
    switch (num) {
        case 0:
            return par1 + par2;
        case 1:
            return par1 - par2;
        case 2:
            return par1 * par2;
        case 3:
            return par1 / par2;
        default:
            return "Invalid";
  }
}
function run(num) {
    val1 = parseFloat(document.getElementById("val1").value);
    val2 = parseFloat(document.getElementById("val2").value);

    if (isNaN(val1) || isNaN(val2)) {
        document.getElementById("results").innerHTML = "Please enter valid numbers.";
    } else {
        document.getElementById("results").innerHTML = `Result: ${val1} ${val2} - ${numberSum(num,val1, val2)}`;
    }
}
function fourNum() {
    let arre = [2, 4, 6, 8, 10];
    let avg = 0;

    for (let i = 0; i < arre.length; i++) {
        avg += arre[i];
    }
    let avarage=avg / arre.length
    document.getElementById("avg").innerHTML=
   `${arre} of Average:${avarage}` 
}

fourNum();

function primeNumLog(num){
    if (num === 1 || (num % 2 === 0 && num !== 2)) {
        return 'Not prime num';
    } else {
        return 'prime';
    }
}
function primeNum(){
val=parseFloat(document.getElementById('val').value);
if(isNaN(val)){
    document.getElementById("primeres").innerHTML = "Please enter valid numbers.";
}else{
    document.getElementById("primeres").innerHTML = `Result: ${primeNumLog(val)}`;
}
}primeNum();
function posNum(){
const arry=[10,-1,5,-21,4];
const pos=[];
const neg=[];
for(let i=0;i<arry.length;i++){
    if(arry[i]>0){
pos.push(arry[i])
    }else{
        neg.push(arry[i])
    }
}
console.log(pos,neg)
document.getElementById("posNeg").innerHTML =
`Given array is ${arry} Pos Num:${pos} And Neg Num:${neg}`

}
posNum();
function isPalindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/ /g, '');
//console.log(cleanedStr,'cleanedStr')
    const reversedStr = cleanedStr.split('').reverse().join('');
    if (cleanedStr === reversedStr) {
        return 'Palindrome';
    } else {
        return 'Not a Palindrome';
    }
}

function PalindromeNum() {
    val3 = document.getElementById('str').value;
    if (!val3.trim()) {
        document.getElementById("res").innerHTML = "Please enter valid str/num.";
    } else {
        document.getElementById("res").innerHTML = `Result: ${isPalindrome(val3)}`;
    }
}

PalindromeNum();

function findInt(par) {
    const arrayy = [10, 5, 47, 4, 1, 15, 20, 88, 9, 3];

    for (let i = 0; i < arrayy.length; i++) {
        if (arrayy[i] === par) {
            return `true: given integer available in existed array `;
        }
    }

    return `false: given arr is ${arrayy} integer NOT Available in exited array`;
}

function findArrIntNum() {
    val4 = parseFloat(document.getElementById('inte').value);
    if (isNaN(val4)) {
        document.getElementById("finres").innerHTML = "Please enter a valid number.";
    } else {
        document.getElementById("finres").innerHTML = `Result: ${findInt(val4)}`;
    }
}

findArrIntNum();

function asdAndDsnd(){
const art=[10,145,14,16,478,7,1,23,13,45,17,5];
art.sort((a,b)=>a-b)
console.log(art,'art')
document.getElementById("asd").innerHTML =
`asend:${art}`;
}asdAndDsnd();
function dsdAndDsnd(){
    const art1=[10,145,14,16,478,7,1,23,13,45,17,5];
    art1.sort((a,b)=>b-a)
    console.log(art1,'art1')
    document.getElementById("dsd").innerHTML =`desend:${art1}`;
    }dsdAndDsnd();

    // function sortAscending(arr) {
    //     const n = arr.length;
    
    //     for (let i = 0; i < n - 1; i++) {
    //         for (let j = 0; j < n - i - 1; j++) {
    //             if (arr[j] > arr[j + 1]) {
    //                 const temp = arr[j];
    //                 arr[j] = arr[j + 1];
    //                 arr[j + 1] = temp;
    //             }
    //         }
    //     }
    
    //     return arr;
    // }
    
    // function sortDescending(arr) {
    //     const n = arr.length;
    
    //     for (let i = 0; i < n - 1; i++) {
    //         for (let j = 0; j < n - i - 1; j++) {
    //             if (arr[j] < arr[j + 1]) {
    //                 const temp = arr[j];
    //                 arr[j] = arr[j + 1];
    //                 arr[j + 1] = temp;
    //             }
    //         }
    //     }
    
    //     return arr;
    // }
    
    // function asdAndDsnd() {
    //     const art = [10, 145, 14, 16, 478, 7, 1, 23, 13, 45, 17, 5];
    //     const sortedArray = sortAscending(art);
    //     console.log(sortedArray, 'art');
    //     document.getElementById("asd").innerHTML = `asend: ${sortedArray}`;
    // }
    // asdAndDsnd();

    // function dsdAndDsnd() {
    //     const art1 = [10, 145, 14, 16, 478, 7, 1, 23, 13, 45, 17, 5];
    //     const sortedArray = sortDescending(art1);
    //     console.log(sortedArray, 'art1');
    //     document.getElementById("dsd").innerHTML = `desend: ${sortedArray}`;
    // }
    // dsdAndDsnd();

    function patt1(){
        let rows = 5;
let pattern = "";
for (let i = 1; i <= rows; i++) {
   for (let j = 1; j <= i; j++) {
      pattern += i;
   }
   pattern += "<br/>";
}
//console.log(pattern);
document.getElementById("pat1").innerHTML = 
pattern;
    }patt1()

function patt2(){
    let n = 5;
let string = "";
for(let i = 0; i < n; i++) { 
  for(let j = 0; j < n; j++) { 
    if(j<=i){
    string += "*";
    }
  }
  string += "<br/>";
}
//console.log(string);
document.getElementById("pat2").innerHTML = string;
}patt2();

function patt3(){
    let n = 5; 
let string = "";
for(let i = 0; i < n; i++) { 
  for(let j = 0; j < n; j++) { 
    if(j>=i){
    string += "*";
    }
  }
  string += "<br/>";
}
console.log(string);
document.getElementById("pat3").innerHTML = string;
}patt3();

function patt4(){
    let n = 5;
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < n - i; j++) {
        string += " ";
      }
      for (let k = 0; k < i; k++) {
        string += "*";
      }
      string += "\n";
     
    }
    console.log(string);
document.getElementById("pat4").innerHTML = string;
}patt4();
      

function patt5(){
    let rows = 5;
    let pattern = "";
    for (let n = 1; n <= rows; n++) {

       for (let space = 1; space <= rows - n; space++) {
          pattern += " ";
       }

       for (let num = 1; num <= 2 * n - 1; num++) {
          pattern +='*';
       }
    
       pattern += "\n";
    }
    console.log(pattern);
document.getElementById("pat5").innerHTML = pattern;
}patt5();

function patt6(){
    let n = 5;
    let string = "";
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        string += String.fromCharCode((i - 1) + 65);
      }
      string += "<br/>";
    }
    console.log(string);
document.getElementById("pat6").innerHTML = string;
}patt6();


function patt7(){
    let rows = 5;
let pattern = "";
for (let i = 5; i>0; i--) {
   for (let j = 1; j <=rows-i+1; j++) {
      pattern += i;
   }
   pattern += "<br/>";
}
console.log(pattern)
document.getElementById("pat7").innerHTML = pattern;
}patt7();


function swapNum(){
const arrt=[12,4];
const n = arrt.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arrt[j] > arrt[j + 1]) {
                const temp = arrt[j];
                arrt[j] = arrt[j + 1];
                arrt[j + 1] = temp;
            }
        }
    }
    console.log(arrt)
    document.getElementById("swp").innerHTML = `given array is arrt=[12,4] and swapNum Result:${arrt}`;
}swapNum();


function swapNumWithout(){
    let a = 5;
let b = 10;

console.log(`Before swap: a = ${a}, b = ${b}`);

[a, b] = [b, a];

console.log(`After swap: a = ${a}, b = ${b}`);
document.getElementById("swp1").innerHTML = `After swap: a = ${a}, b = ${b}`;

}swapNumWithout();