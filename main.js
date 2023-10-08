console.log('Good Day');

const first_name = 'Marek';
const age = 39;

console.log(`My name is ${first_name}, and I am ${age} year's old.`);

const header = document.querySelector(".page-header__heading-js");

header.innerHTML = 'To jest bardzo fajoska strona!!! ;)';
header.style.color = 'red';

const empty = document.querySelector(".empty__header-js");
empty.innerHTML = 'To jest treść dodana w JS'
empty.style.color = 'red';

console.log(header.innerHTML);