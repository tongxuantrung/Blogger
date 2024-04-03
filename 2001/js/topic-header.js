const button = document.querySelector('.topic');

button.addEventListener('click',changeColor);

function changeColor(){
    const background = document.querySelector('.mainMenu');
    const arrayColor = ['#ffebee','#e0f2f1','#e2f1fc','#fff8e1','#eceff1','#fbe9e7'];
    let random = arrayColor[randomColor(arrayColor)];
    background.style.backgroundColor = random;
    // console.log(random);
}

function randomColor(array){
    return Math.floor(Math.random()*array.length);
}
