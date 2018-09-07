import {elements} from '../base.js';

export const renderRecipe = (recipe)=>{
    console.log(recipe);
    const html = `
    
            <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLongTitle">${recipe.title} by ${recipe.author}</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>
            <div class="modal-body">
            ...
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

            </div>
    `;
    document.querySelector('.modal-content').innerHTML = html;
}