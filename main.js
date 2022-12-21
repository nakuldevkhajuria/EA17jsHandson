
const first = document.getElementById('text');
first.addEventListener('click', ()=> {
    document.getElementById('text').style.color = 'red';
})

function myFunction(){
    const second = document.getElementsByTagName('h1')[0].innerText;
    document.getElementById('second').innerHTML = `the text inside first h1 tag is "${second}"`;
    // console.log(second)
}


const third = document.getElementsByClassName('box')[0];
console.log(third)
third.addEventListener('click', () => {
    document.getElementsByClassName('box')[0].style.color = 'red';
})


function changeName(){
    document.getElementById('changeName').innerText = `Hello world`;  
}
function flexdir(){
    console.log('hi');
    let flexdir = document.getElementById('bloc');

    if(flexdir.style.flexFlow == 'column wrap'){
        flexdir.style.flexFlow = 'row wrap';
    }
    else {
        flexdir.style.flexFlow = 'column wrap';
    }
}

//question 7
const helo = document.querySelectorAll('h1')[3];
console.log(helo);
helo.setAttribute('id','heading');
// helo.setAttribute('color','red');
helo.style.color = 'red';
 const text =    document.getElementById('heading');
 text.addEventListener('click', () => {text.style.fontSize= '40px'})

