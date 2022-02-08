let id = document.getElementById('app');
let myclass = document.getElementsByClassName('myclass');
let myclass1 = document.getElementsByClassName('myclass1')[0];
//querySelector обеспечивает доступ к первому елементу(можно по классу, можно по id, можно #id>.class и т.д.)
let myclass2 = document.querySelector('.myclass2');
//querySelectorAll обеспечивает доступ к массиву(можно по классу, можно по id и т.д.)

let myclass3 = document.querySelectorAll('.myclass3');
console.log(id);
console.log(myclass);
console.log('---------------');

console.log(myclass1);
console.log(myclass2);
console.log('---------------');
/*
for (var i = 0; i < 5; i++) {
	//setTimeout(function(){
	console.log('i=',i);//},1000)
}
*/

function get_num(x=3){
	for (var j = 0; j < x; j++) {
	console.log('j=',j);
}
//setTimeout(get_num,2000);
}

document.querySelector('#small').addEventListener('click', myFunction);

function myFunction(){
setTimeout(get_num,2000);
}
