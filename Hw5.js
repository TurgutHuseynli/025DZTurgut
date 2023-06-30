// 1)
//как называется функция 
function showMessage1(параметры) {
    //код
}
//Ответ: обычная функция.
// 2)
//как называется функция 
let showMessage2 = function(параметры) {
    //код
}
//Ответ: функциональное выражение.

// 3)
//как называется функция 
let showMessage3 = (параметры) => {
    //код
}
//Ответ: стрелочная функция.

// 4)
//создайте функцию которая выводит в консоли текст 'Запуск' и вызовите функцию
function f4(){
    console.log('Запуск')
}
f4()

// 5)
//создайте функцию которая в качестве пареметров принимает 'a' и 'b' и возвращает сумму полученных параметров
function f5(a=0, b=0){
    return a+b
}

// 6)
//конвертируйте функцию ниже в функциональное вырожение
function sum6(text='text', age=24) {
    return `${text} ${age}`;
}
let f6 = function(text='text', age=24){return `${text} ${age}`;}

// 7)
//создайте функцию с помощбю конструктора которая в качестве параметра принимает 'a', 'b' и возвращает сумму полученных параметров
function Me(){
    this.name = 'Turgut'
    this.f7 = function(a=0, b=0){
        return a+b
    }
}

// 8)
//можно ли вызвать функцию до ее обьявления?
//Ответ: да, если её потом объявят.

// 9)
//создайте самовызывающуюся функцию которая выводит в консоли слово 'Запуск'
(function f9(){
    console.log('Запуск')
})()

// 10)
//что такое arguments в функциях?
function sum10(text, age) {
    console.log(arguments);
}

sum10('text', 24);
//Ответ: слово arguments означает аргументы функции.

// 11)
//выведите в консоли обьект с параметрами из функции
function sum11(text, age) {
    //код
}

sum11('text', 24);
let obj11 = {
    text: 'why do you read this?',
    age: 47,
    suma11(){
        return `${this.text} ${this.age}`
    }
}
console.log(obj11)

// 12)
//задайте параметру text значение 'some text' по умолчанию
function sum12(text='some text', age) {
    return `${text} ${age}`
}

sum12('text', 24);

// 13)
//вызовите функцию ниже
function sum13(text, age, job) {
    console.log(text + String(age) + job)
}
sum13('Turgut', 13, 'student')

// 14)
//вызовите и передайте параметры второго обьекта в функцию внутри первого обьекта с помощью call()
const persona14 = {
    firstFunc: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const personb14 = {
    firstName: 'Samuil',
    lastName: 'Farzaliyev'
}
persona14.firstFunc.call(personb14)

// 15)
//вызовите и передайте параметры второго обьекта в функцию внутри первого обьекта с помощью apply()
const persona15 = {
    firstFunc: function() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const personb15 = {
    firstName: 'Samuil',
    lastName: 'Farzaliyev'
}
persona15.firstFunc.apply(personb15)

// 16)
//какой из методов может принять массив параметров
// call()
// apply()
//Ответ: apply()

// 17)
//с помощью какого метода можно вывести максимально большое число из списка
//1, 2, 3
//Ответ: с помощью Math.max() если это просто числа и Math.max.apply('null', ) если это массив.

// 18)
//с помощью какого метода можно вывести максимально большое число из массива
//[1, 2, 4]
//Ответ: с помощью Math.max.apply - Math.max.apply('null', [1, 2, 4])

// 19)
//с помощью какого метода можно вывести самое маленькое число из списка
//1, 2, 3
//Ответ: с помощью Math.min() если это просто числа и Math.min.apply('null', ) если это массив.

// 20)
//с помощью какого метода можно вывести маленькое число из массива
//[1, 2, 4]
//Ответ: с помощью Math.min.apply - Math.min.apply('null', [1, 2, 4])