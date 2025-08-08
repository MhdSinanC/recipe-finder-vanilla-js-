// Selecting DOM elements
const form = document.querySelector('#searchBox');
const input = document.querySelector('.recipeInput');
const loaderText = document.querySelector('.loader-text');
const recipeContainer = document.querySelector('.recipes-container');

const popupOverlay = document.querySelector('.popup-overlay');
const scrollContent = document.querySelector('.scroll-content');
const popupRecipeTitle = document.querySelector('.popup-recipe-title');
const popIngredientsTable = document.querySelector('.popup-ingredients');
const popupInstructions = document.querySelector('.popup-instructions');
const popupCloseBtn = document.querySelector('.popup-close-btn');

let meals = [];     // Holds fetched meal data

// Form submission handler
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    recipeContainer.innerHTML = '';     // Clear previous results
    logMessage('Loading', 'loading');   // Show loading
    meals = await getRecipes(input.value.trim());   // API call
    displayMeals(meals);    // Render cards
    input.value = '';       // Reset input
    input.blur();           // Remove focus
})

// Close popup handler
popupCloseBtn.addEventListener('click', () => {
    popupOverlay.classList.add('hidden');
    document.body.classList.remove('no-scroll');
})


// Function to display loading / error messages
const logMessage = (message, type) => {
    loaderText.textContent = message;
    if (type === 'loading') {
        loaderText.classList.add('loading');
        loaderText.classList.remove('error');
    } else if (type === 'error') {
        loaderText.classList.remove('loading');
        loaderText.classList.add('error');
    } else if (type === 'clear') {
        loaderText.classList.remove('loading');
        loaderText.classList.remove('error');
    }
}


// Fetch recipe data from API
const getRecipes = async (recipeName) => {

    const apiUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`;
    try {
        const data = await axios.get(apiUrl);
        if (data.data.meals === null) {
            logMessage('Recipe Not Found :(', 'error')
            return null;
        } else {
            logMessage('', 'clear');
            // console.log(data.data.meals);
            return data.data.meals;
        }
    } catch (e) {
        console.log(e.message);
        logMessage('Recipe Not Found :(', 'error');
    }

}


// Render all fetched recipes
const displayMeals = (meals) => {

    if (!meals) return;

    // Create HTML for each recipe
    const allRecipes = meals.map(el => {
        return `
        <div class="recipe-card">
            <img loading="lazy" class="recipe-img" src="${el.strMealThumb}"
                alt="recipe image">
            <h3 class="recipe-title">${el.strMeal}</h3>
        </div>
        `;
    });

    // Append to DOM
    recipeContainer.innerHTML = allRecipes.join('');

    // Add click event to each card
    const cards = document.querySelectorAll('.recipe-card');
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            const meal = meals[index];
            showPopup(meal);        // Show popup with meal data
            scrollContent.scrollTop = 0;    // Reset scroll to top
        })
    })
}


// Display recipe popup
const showPopup = (meal) => {
    // console.log(meal);
    popupOverlay.classList.remove('hidden');
    document.body.classList.add('no-scroll');
    popupRecipeTitle.textContent = meal.strMeal;
    popupInstructions.textContent = meal.strInstructions;

    let tableHTML = '';
    // Loop through ingredients and measures
    for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        const measure = meal[`strMeasure${i}`];

        // Add to table only if both are valid
        if (ingredient && measure) {
            tableHTML += `<tr><td>${measure}</td><td>${ingredient}</td></tr>`;
        }
    }
    popIngredientsTable.innerHTML = tableHTML;
}



