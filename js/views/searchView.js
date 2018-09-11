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
   // inser footer at the end.

   const html__footer = `
   <footer class = "footer">
            <div class="footer__icons">
                    <div class="footer__icon">
                        <i class="fab fa-twitter"></i>
                    </div>
                    <div class="footer__icon">
                        <i class="fab fa-linkedin-in"></i>
                    </div>
                    <div class="footer__icon">
                        <i class="fab fa-github-square"></i>
                    </div>
            </div>
            <div class="footer__signature">
                Created by <a class = "footer__link" href="https://dash-intel.com/">dash-intel.com</a>
            </div>      
    </footer>   
    
   `;
   elements.results.insertAdjacentHTML('afterend',html__footer);
 
}

export const printNoResult = (query) =>{
    elements.loading.innerHTML = `<p class = "alert alert-danger">Sorry, there was no results for <strong>${query}</strong></p>`
}