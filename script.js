const btn = document.querySelector('.btn');
const generetor = document.querySelector('.generetor');
const autor = document.querySelector('.autor');

let arrQuote = [
    {
        quote: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi consequatur delectus dicta error est',
        autor: 'Nikita'
    },
    {
        quote: 'The price of anything is the amount of life you exchange for it.',
        autor: '- Liza'
    },
    {
        quote: 'Humor is richly rewarding to the person who employs it. It has some value in gaining and',
        autor: '- Lylilop'
    },
    {
        quote: 'A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.',
        autor: '- Lily'
    }
];

let count = 0;

btn.addEventListener('click', changeQuoteByClick);

function changeQuoteByClick () {
    count++;
    console.log(count)
    if(count >= arrQuote.length){
        count = 0;
    }
    generetor.innerHTML = arrQuote[count].quote
    autor.innerHTML = arrQuote[count].autor
}

