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
    let html = ``;
    html += `
    <div class="recipe" style = "background-image: url(${recipe.image_url})">
        <div class="recipe__content">
            <h4 class="recipe__header">${recipe.title}</h4>
        </div>
        <button type="button" href = "#${recipe.recipe_id}" class="btn recipe__button" data-toggle="modal" data-id = "${recipe.recipe_id}" data-target="#recipe">Show Ingredients</button>

          

                            <div class="modal fade" id="recipe" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered" role="document">
                                    <div class="modal-content">
                                      
                                    </div>
                                </div>
                        </div><!--modal end-->
    </div>


    
    `;
    elements.results.insertAdjacentHTML('beforeend',html);

}

export const clearResults = ()=>{
    elements.results.innerHTML = '';
}
   

export const printResults = (recipes)=>{

   recipes.forEach(renderRecipe); 
 
}