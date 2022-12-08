//6-Неделя 
//1-Задание 
 let arr =[1,2,3,4,5]
 let sum = 0
 function arrSum (array) {
    for(let i =0;i<arr.length;i++) {
        sum += array[i]
    }
    console.log(sum)
   

 }
 arrSum(arr)

 //2-Задание
 let obj = {a: 1, b: 2, c: 3};
        let result = 0;
        for (let key in obj) {
            result += obj[key];
        }
        console.log(result);
 
 //3-Задание
 let arr2 = []
 for(let i = 1; i<=10;i++){
    console.log(i)
 }       
 //4-Задание 
 let arr3 = [10, 20, 30, 50, 235, 3000];
console.log(arr3.filter(num => ['1','2','5'].includes(num.toString()[0])));
//5-Задание
let arr4 = ['a', 'b', 'c', 'd', 'e'];
let obj2 = Object.assign({}, arr4);
console.log(obj2)