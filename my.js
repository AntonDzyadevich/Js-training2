"Use strict";
//document.getElementById('text').onclick = function () {
//  document.getElementById('text').hidden = true;
//}

//let task = [];
//if (localStorage.getItem('todo') != undefined) {
//  task = JSON.parse (localStorage.getItem('todo'));
//  out();
//}
//
//document.getElementById('but').onclick = function () {
//  let add = document.getElementById('text').value;
//  let temp = {};
//  temp.todo = add;
//  temp.check = false;
//  let i = task.length;
//  task[i] = temp;
//  console.log(task);
//  out();
//  localStorage.setItem('todo', JSON.stringify(task));
//}
//function out() {
//  let out = '';
//  for(let key in task) {
//    if (task[key].check == true) {
//      out += '<input type = "checkbox" checked>';
//    }
//    else {
//     out += '<input type = "checkbox">';
//  }
//    out += task[key].todo + '<br>';
//    
//  }
//  document.getElementById('out').innerHTML = out;
//}
//for (let li of document.querySelectorAll('li')) {
//  console.log(li);
//}
//
//for (let li of document.querySelectorAll('li')) {
//  let title = li.innerHTML;
//  console.log(title);
//}

let btn_prev = document.querySelector('#gallery .buttons .prev');
let btn_next = document.querySelector('#gallery .buttons .next');
let images = document.querySelectorAll('#gallery .photos img');
let i = 0;

btn_prev.onclick = function() {
  images[i].style.display = 'none';
  i--;
  
  if(i < 0) {
    i = images.length - 1;
  }
  images[i].style.display = 'block';
}





btn_next.onclick = function() {
  images[i].style.display = 'none';
  i++;
  
  if(i >= images.length) {
    i = 0;
  }
  images[i].style.display = 'block';
}







