// null,undefined,boolean,number,string,object,symbol

// console.log(typeof 0)
// console.log(typeof true)
// console.log(typeof 'java') // "" '' ``
// console.log(typeof undefined)
// console.log(typeof {})
// console.log(typeof Symbol('js'))
// console.log(typeof null)
// console.log(typeof function(){})
// console.log(typeof NaN)

//Приведение типов
// let language= 'Javascript'
// if (language){
//     console.log('The best language is:' ,language)
// }

// '',0,null,undefined,NaN,false  -- логические false по умолчанию
// console.log(Boolean(NaN))
// console.log(Boolean([]))

//Строки и числа

// console.log(1 +'2') // string 12
// console.log('' + 1 + 0) //string 10
// console.log('' - 1 + 0) // -1 number
// console.log('3'*'8') // 24 number
// console.log(4+10+'px') //14px string
// console.log('px'+5+10) //string px510
// console.log('42'- 40) // 2 number
// console.log('42px'-2) //NaN
// console.log(null+2) // 2
// console.log(undefined+42)  //NaN

//== vs ===

// console.log(2 == '2') // true
// console.log(2 ==='2') // false
// console.log(undefined==null)
// console.log(undefined===null)

// console.log('0'==false)
// console.log(0 === 0)

//=======
// console.log(false==' ') // true
// console.log(false==[]) // true
// console.log(false=={}) // false
// console.log(' '==0) // true
// console.log(' '== []) // false
// console.log(' '== {}) // false
// console.log(0 == [])// true
// console.log(0 == {})// false
// console.log(0 == null)// false
