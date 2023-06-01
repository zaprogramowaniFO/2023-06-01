const header = document.querySelector('h1');
const button = document.querySelector('button');
let text = header.innerHTML;
let count = 0;
function change() {

    //po kliknieciu napis 'witaj swiecie' ma sie zmienic na 'JS jest the best!';
    if(header.innerHTML == text){
        count++;
        header.innerHTML = `JS JEST THE BEST! PO RAZ ${count}!`;
    }
    else {
        header.innerHTML = text;
    }
}

button.addEventListener('click',change);