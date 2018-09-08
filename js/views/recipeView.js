import {elements} from '../base.js';


const renderIngredients = (ingredients) =>{
    let html = `<ul class = "recipe__ul"></ul>`;

    ingredients.forEach(ingredient => {
        html += `
                <li class = "recipe__li"><i class="fas fa-utensils recipe__icon"></i></i> ${ingredient}</li>`
     });
     return html;
}


export const renderRecipe = (recipe)=>{
    console.log(recipe);
    const html = `
    
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">
             <span class = "modal-primary"> ${recipe.title}</span>
             <span class = "modal-secondary">By ${recipe.author}</span> 
          
             </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body">
            ${renderIngredients(recipe.ingredients)}
            </div>
            <div class="modal-footer">
          
            <button class = "btn modal-btn-fullRecipe" type="button" value="button name" onclick="window.open('${recipe.url}','_blank')">View Full Recipe</>
            <button type="button" class="btn modal-btn-close" data-dismiss="modal">Close</button>

            </div>
           
    `;
    console.log(recipe.url);
  
    document.querySelector('.modal-content').innerHTML = html;
 
}