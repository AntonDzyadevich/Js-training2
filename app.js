"Use strict";

//let question = prompt('Кто здесь?', '');
// if (question == 'Админ') {
//   let code= prompt('Пароль?', '');
// if (code == 'Я главный') {
//   alert ('Здравствуйте');
// } else if (code == '' || code == null) {
//   alert('Отменено');
// } else {
//   alert('Неверный пароль!');
// }


//for (let i = 2; i <= 10; i++) {
//  if (i % 2 == 0){
//     alert(i);
//  }
//}


//let value = prompt('Введите значение!');
//if (value > 0) {
//  alert('1');
//}else if (value < 0) {
//  alert('-1');
//}else {
//  alert('0');
//}

//let value = prompt('Введите значение!'); 
//let message = (value > 0) ? '1' :            
//(value < 0) ? '-1' : '0';
//
//alert( message );

//let message = (login == 'Сотрудник') ? 'Привет' :
//(login == 'Директор') ? 'Здравствуйте' :
//(login == '') ? 'Нет логина' : '';

//let user = {};
//user.name = 'John';
//user.surname = 'Smith';
//user.name = 'Pete';
//delete user.name;

// 12.01.2020

//function checkAge (age) {
//  return (age>18) ? true : confirm('Родители разрешили!');
//}
//
//function checkAge (age) {
//  return (age>18) || return confirm('Родители разрешили!');
//}

//function min(a,b) {
// if (a < b) { 
//  return a;
// }else {
//   return b;
// }
//}
//function min (a,b){
//  return (a<b) ? a : b;
//}
//let calculator = {
//  read() {
//    this.x = +prompt('Введите число x!', '');
//    this.y = + prompt('Введите число y!', '');
//  },
//  sum() {
//    return this.x + this.y;
//  },
//  mult() {
//     return this.x * this.y;
//  },
//  div() {
//    return this.x / this.y;
//  },
//  sub() {
//    return this.x - this.y;
//  }
//};
//calculator.read ();
//alert (calculator.sum());
//alert (calculator.mult());
//alert (calculator.div());
//alert (calculator.sub());




//ДОМАШНЕЕ ЗАДАНИЕ ОБЬЕКТЫ, МЕТОДЫ.

let bodubuilder = {
  name: "Ronny",
  surname: "Coleman",
  height: "180cm",
  weight: "100kg",
  training: false,
  calories: 0,
  
  add() {
    if(this.calories == 0){
      alert(`У ${this.name} нет сил, нужно поесть!`); 
    }else {
      this.training = true;
    }
  },
  
  slim() {
    this.training = false;
  },
  
  eat() {
    if(this.training) {
      if(this.calories > 3800) {
      alert(`${this.name} ${this.surname} набирает вес!`);
      this.calories = this.calories - 1000;  
      } else {
      alert(`${this.name} ${this.surname} худеет!` );
      this.slim();  
      }  
    }else {
      alert(`${this.name} полон сил, пора начинать тренировку!`);
    }  
  },
  
  addCalories(amount) {
    this.calories = this.calories + amount;
  }  
};
//bodubuilder.add();
//bodubuilder.eat();
bodubuilder.add();
bodubuilder.eat();
bodubuilder.addCalories(4000);
bodubuilder.add();
bodubuilder.eat();
//bodubuilder.eat();
//bodubuilder.eat();
//bodubuilder.slim();
//console.log(bodubuilder.calories);



  



















