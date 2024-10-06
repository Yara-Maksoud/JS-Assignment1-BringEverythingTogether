const title = document.querySelector('#title');
const description = document.querySelector('#desc');
const details = document.querySelector('#details');
const form = document.querySelector('form');
const recipes = document.querySelector('.row');
const msg = document.querySelector('.msg');


//add new recipe card when submit the form
form.addEventListener('submit', addCard);

function addCard(e) {
    e.preventDefault();

    if (title.value === '' || description.value === '') {
        msg.style.display = 'block';
        msg.textContent = 'Please enter the title and the description';
    }
    else {
        msg.style.display = 'none';
        const div = document.createElement('div');
        div.classList.add('col-lg-4', 'col-md-6', 'mb-4');
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `<img src="https://via.placeholder.com/350x150" class="card-img-top" alt="Recipe ">
                        <div class="card-body">
                        <h5 class="card-title">${title.value}</h5>
                        <p class="card-text">${description.value}</p>
                        <a href="#" class="btn btn-primary">View Recipe</a>
                        </div>`;

        div.appendChild(card);
        recipes.appendChild(div);

        //reset the inputs
        title.value = '';
        description.value = '';
        details.value = '';
    }
}

