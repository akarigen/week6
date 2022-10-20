let num = 100
console.log(Number(num), Boolean(num), String(num))

let bigint = 1234567890123456789012345678901234567890n
console.log(Number(bigint), Boolean(bigint), String(bigint))

let str = 'hello'
console.log(Number(str), Boolean(str), String(str))

let bln = true
console.log(Number(bln), Boolean(bln), String(bln))

let nul = null
console.log(Number(nul), Boolean(nul), String(nul))

let notFound = undefined
console.log(Number(notFound), Boolean(notFound), String(notFound))

let objct = {
    name: 'Justin',
    age: 17
}
console.log(Number(objct), Boolean(objct), String(objct))

let id = Symbol("id")
console.log(Number(id), Boolean(id), String(id));
