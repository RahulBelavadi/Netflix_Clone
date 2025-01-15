document.querySelectorAll('.infobutton').forEach(button => {
    button.addEventListener('click', () => {
        let description = button.nextElementSibling;

        
        if (description.style.display === "none" || description.style.display === "") {
            description.style.display = "block";
        
        } else {
            description.style.display = "none";
        }
    });
});

let mark = document.querySelector('.Right');
let left = document.querySelector('.left');
let card = document.querySelector('.card-container1');

mark.addEventListener('click', () => {
    card.scrollBy({ left: 200, behavior: 'smooth' });
});

left.addEventListener('click', () => {
    card.scrollBy({ left: -200, behavior: 'smooth' });
});

