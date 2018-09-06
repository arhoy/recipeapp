import {elements} from '../base.js';

export const getInput = ()=>{
    return elements.searchInput.value;
}

const loopIngredients = (ingredientsArray)=>{
    let html = ``;
    ingredientsArray.forEach(ingredient => {
        html += `<p>${ingredient.text}</p>`
    });
    return html;
}

const renderRecipe = (recipe)=>{
    console.log(recipe.recipe);
    const r = recipe.recipe;
    let html = ``;
    html += `
    <div class="recipe" style = "background-image: url(${r.image})">
        <div class="recipe__content">
            <h4 class="recipe__header">${r.label}</h4>
        </div>
        <button type="button" class="btn recipe__button" data-toggle="modal" data-target="#recipe">Show Ingredients</button>
    
    </div>

    <div class = "ingredients">
        ${loopIngredients(r.ingredients)}
    </div>
    
    `;
    elements.results.insertAdjacentHTML('beforeend',html);

}

export const clearResults = ()=>{
    elements.results.innerHTML = '';
}
   

export const printResults = (recipes)=>{

    const markup = recipes.forEach(renderRecipe); 
}