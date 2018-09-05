import {elements} from './base.js';

export const getInput = ()=>{
    return elements.searchInput.value;
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
    
        <div class="modal fade" id="recipe" tabindex="-1" role="dialog"  aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modalc modal-content">

            </div>
            </div>
        </div><!--.modal-->
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