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
// var li = document.getElementsByTagName('li');
// console.log(typeof li);
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow'

//QuerySelector 
// var item = document.querySelector('.list-group-item:nth-child(2)');
// item.style.backgroundColor = 'green';
// var item2 = document.querySelector('.list-group-item:nth-child(3)');
// item2.style.display = 'none';

//QuerySelectorAll
var secondItem = document.querySelectorAll('li');
secondItem[1].style.color = 'green';

var odd= document.querySelectorAll('li:nth-child(odd)');

for (var i=0; i<odd.length; i++){
    odd[i].style.backgroundColor = 'green';
}
