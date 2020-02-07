'use strict';

//function input (i) {
//  inputCalc.value = inputCalc.value + i;
//}
//function result ()
//
//
//
//
//let inputCalc = document.querySelector('.account');
//let resultCalc = document.querySelector('.result');
//let btn = document.querySelector('.btn');
//let btnOper = document.querySelector('.btn btn-indigo');
//let btnBig = document.querySelector('.btn-big');

let calc = {
  data: [],
  result: 0,
  display: document.querySelector('.header'),
  panel: document.querySelector('.main'),
  viewData() {
    this.display.children[0].value = this.data.join('');
    this.display.children[1].value = this.data.join('');
  },
  addData() {
    function checkDot() {
      if(calc.data.length > 0 && calc.data[calc.data.length - 1] !== '.'){
        return true;
      }
    }
    
    if(+event.target.innerHTML < 10 || checkDot()) {
      calc.data.push(event.target.innerHTML);
    }
    
    
    calc.viewData();
  },
  
};

calc.panel.addEventListener('click', calc.addData);






