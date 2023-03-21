var test=document.getElementsByClassName("list-group-item");

console.log(test[1]);
test[1].style.backgroundColor='green'
for(let i=0;i<test.length;i++)
{
    test[i].style.fontWeight='bold';
}