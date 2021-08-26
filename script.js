// 1. (это задание делайте по желанию) Написать функцию, преобразующую число в объект.
//   Передавая на вход число в диапазоне [0, 999],
//   мы должны получить на выходе объект, в котором в соответствующих свойствах описаны разряды числа:
//   - единицы (в свойстве units)
// - десятки (в свойстве tens)
// - сотни (в свойстве hundereds)
// Например, для числа 45 мы должны получить следующий объект:
// {
//   units: 5, //это единицы
//   tens: 4, //это десятки
//   hundreds: 0, //это сотни
// }
// Если число было передано вне [0, 999] диапазона, не целое число или вообще не число,
// необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function transform (number) {
  if (!Number.isInteger(number)|| number < 0 || number > 999) {
    console.log("Введенное число на соответсвует диапазону от 0 до 999.");
   return {};
  }
  return {
    units: number % 10,
    hundereds: Math.floor(number / 100),
    tens: Math.floor(number / 10) % 10,
  }
}
console.log(transform(456));


// 1.1 (это обязательное задание) Сделайте в стиле es5,
// а затем в стиле es6 (по аналогии из дополнительных видео ->
// 3 примеры наследования -> типы на es5 и es6), конструктор Product,
// который принимает параметры name и price, сохраните их как свойства объекта.
// Также объекты типа Product должны иметь метод make25PercentDiscount,
// который будет уменьшать цену в объекте на 25%.
// Имейте в виду, что метод make25PercentDiscount не должен быть внутри
// функции-конструктора, и также не нужно создавать отдельный объект-прототип (как объект transport в уроке).

// es5
function Product5(name, price) {
  this.name = name;
  this.price = price;
}
Product5.prototype.make25PercentDiscount = function () {
    return this.price*75/100;
  };

let product5 = new Product5('Сумка', 200);
let cost5 = product5.make25PercentDiscount();
console.log(cost5);

// es6
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  make25PercentDiscount() {
    return this.price*75/100;
  }
}
let product6 = new Product('Туфли', 99);
let cost6 = product6.make25PercentDiscount();
  console.log(cost6);


// 1.2 (это обязательное задание) Сделайте в стиле es5, а затем в стиле
// es6 (по аналогии из дополнительных видео -> 3 примеры наследования -> механика наследования),
// а) конструктор Post, который принимает параметры author, text, date и сохраняет
// их как свойства объекта. Объекты типа Post должны иметь метод edit, который будет
// принимать текст и записывать его в свойство text объекта.
//   б) конструктор AttachedPost, который принимает параметры author, text, date. П
//   роинициализируйте эти свойства с помощью конструктора Post, чтобы не дублировать код.
//   Также в конструкторе AttachedPost должно создаваться свойство highlighted со значением false.
//   Унаследуйте в объектах типа AttachedPost методы из Post.
//   Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать
//   свойству highlighted значение true.
// es5
function Post5(author, text, date) {
  this.author = author;
  this.text = text;
  this.date = date;
}
Post5.prototype.edit = function (text) {
   this.text = text;
};
function AttachedPost5(author, text, date) {
 Post5.call(this,author, text, date);
  this.highlighted = false;
}
AttachedPost5.prototype.makeTextHighlighted = function () {
   this.highlighted = true;
};
let post5 = new AttachedPost5('Свитер', "aaaaa","21.01.2021");
post5.makeTextHighlighted();
console.log(post5);

// es6
class Post6 {
  constructor(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
  }
   edit(text) {
     this.text = text;
  }
}
class AttachedPost6 extends Post6 {
 constructor(author, text, date) {
   super(author, text, date);
   this.highlighted = false;
 }
  makeTextHighlighted() {
    this.highlighted = true;
  }
}

let post6 = new AttachedPost6('Сумка', "rrrrr","21.01.2021");
post6.edit("new text");
console.log(post6);
