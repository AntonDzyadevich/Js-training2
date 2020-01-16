"Use strict";

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



  



















