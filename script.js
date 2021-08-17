"use strict";
// 1
// //пример 1
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2 - так как сначала а = 1 увеличивается на 1 и становится 2, а потом присваивается с
//пример 2
d = b++;
alert(d); //ответ: 1 - сначала b = 1 и присваивается d, а потом b увеличивается на 1 и становится 2
//пример 3
c = 2 + ++a;
alert(c); //ответ: 5 - к 2 прибавляем увеличенное а на единицу а = 3( так как в примере1 а = 2)
//пример 4
d = 2 + b++;
alert(d); //ответ: 4 - к 2 прибавляем b = 2 (так как в примере2 b = 2), а потом b = 2 увеличивается на 1 и становится 3
alert(a); //3
alert(b); //3


// 2 заменила а на а1
let a1 = 2;
let x = 1 + (a1 *=2);
// (a1 *=2)  (a1 = a1 * 2) эти два выражения равны, поэтому a1 = 4, а х = 1+4=5


// 3 Объявить две переменные a и b и задать им целочисленные произвольные начальные значения.
//   Затем написать скрипт, который работает по следующему принципу:
//   - если a и b положительные, вывести их разность (ноль можно считать положительным числом);
// - если а и b отрицательные, вывести их произведение;
// - * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;
let a3 = 1;
let b3 = 1;
let result;
if (a3 >= 0 && b3 >= 0) {
  result = a3 - b3;
  alert (result);
} else if (a3 < 0 && b3 < 0) {
  result = a3 * b3;
  alert (result);
} else if ((a3 >= 0 && b3 < 0) || (a3 < 0 && b3 >= 0)) {
  result = a3 + b3;
  alert (result);
};


// 4. Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами.
// Т.е. например, функция для сложения должна принимать два числа, складывать их и возвращать результат.
//   Обязательно использовать оператор return.
function summ(arg1, arg2) {
  return arg1 + arg2;
};
function munes(arg1, arg2) {
  return arg1 - arg2;
};
function dell(arg1, arg2) {
  return arg1 / arg2;
};
function multipl(arg1, arg2) {
  return arg1 * arg2;
};


// 5. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
// переданного значения операции (использовать switch) выполнить одну из арифметических операций
// (использовать функции из задания 4) и вернуть полученное значение.
function mathOperation(arg1, arg2, operation){
  switch(operation) {
    case "+":
      alert(summ(arg1, arg2));
      break;
    case "-":
      alert(munes(arg1, arg2));
      break;
    case "/":
      alert(dell(arg1, arg2));
      break;
    case "*":
      alert(multipl(arg1, arg2));
      break;
  }
};
mathOperation(2, 3, "+");
