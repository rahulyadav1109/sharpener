// var test=document.getElementsByTagName("li");

// // console.log(test[1]);
// // test[1].style.backgroundColor='green'
// // for(let i=0;i<test.length;i++)
// // {
// //     test[i].style.fontWeight='bold';
// // }

// console.log(test[4].style.fontWeight='bold')

// let variable=document.querySelector('li:nth-child(1)');
// variable.style.backgroundColor='green'

// let visible=document.getElementsByTagName('li')[2];
// visible.style.display='none';

// let change=document.querySelectorAll('li:nth-child(2)')[0];
// change.style.color='green';

// let odd=document.querySelectorAll('li:nth-child(odd)');

// for(let i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor='green';
// }

var newdiv=document.createElement('div');
newdiv.className='hello';
newdiv.id='hello1';

newdiv.setAttribute('title','Hello Div');

var newdivtext=document.createTextNode('Hello');

newdiv.appendChild(newdivtext);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newdiv)
container.insertBefore(newdiv,h1);

var parentnode= document.getElementById('items');
console.log(parentnode.innerHTML);
parentnode.innerHTML='<li>Hello World</li>' + parentnode.innerHTML;