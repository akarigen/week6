//b
let a = 9000000 ,b =1000
let result = a-b 
console.log (result)

//c
let yardHeight = 50 , yardWidth=30, houseHeight = 20, houseWidth = 10
let yardSquare = (yardHeight * yardWidth)
let houseSquare = (houseHeight * houseWidth) 
let gateLength =(yardSquare / yardWidth)

console.log( "Площадь двора :" +yardSquare )
console.log( "Площадь дома :" + houseSquare)
console.log( "Длина забора  :" + gateLength)

//d
let time1=3 , time2 = 2, speed1=80 , speed2=90
let s1 =  speed1*time1
let s2 = speed2* time2
let middleSpeed = (s1+s2)/(time1+time2)
console.log('Средняя скорость :'+ middleSpeed)

//e
//f
let num1=prompt('Введите первое число:',0)
let num2=prompt('Введите второе число :',0)
if (num1>num2)
{
    console.log(num1+num2)
}
else{
    console.log(num1*num2)
}






