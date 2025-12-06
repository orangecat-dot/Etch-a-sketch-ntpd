const container = document.querySelector('#container');




for (let i = 0; i < 16; i++) { 
    const square = document.createElement('div');
    square.classList.add('grid-sq');

    //adding grid-sq for styling
    //Every HTML element has a classList property. It’s a special object that lets you add, remove, or toggle CSS classes on that element.
    container.appendChild(square);  
    //Set up a “hover” effect so that the grid divs
    //  change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'blue';
    })
    //square.addEventListener('mouseleave', () => {
        //square.style.backgroundColor = ''
    //})
}
const button = document.querySelector('#numofsquare');
const submitbtn = document.querySelector('#submit-btn');
const form = document.querySelector('form');
const input = document.querySelector("#numberofsquare");


button.addEventListener('click', () => {
    form.style.display = "block";
})
    
submitbtn.addEventListener('click', (e) => {
    e.preventDefault();
    const oldsquare = document.querySelectorAll('.grid-sq');
    oldsquare.forEach(sq => sq.remove());

    const inputval = Number(input.value);
    input.value = '';
    input.focus();

    for (let i = 0; i < inputval; i++){
        const newsquare = document.createElement('div');
        newsquare.classList.add('grid-sq');
        container.appendChild(newsquare);
    }

    
})










