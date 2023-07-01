// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(typeof items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[2].style.backgroundColor = 'green';
// for(var i=0; i<items.length; i++){
//     items[i].style.fontWeight = 'bold';
// }
//GET ELEMENTS BY TAG NAME
var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'hello 2';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow'
