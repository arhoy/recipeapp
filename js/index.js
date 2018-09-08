import * as searchView from './views/searchView.js';
import * as recipeView from './views/recipeView.js';
import {elements,renderLoader, clearContents,scrollView} from './base.js';
import {Search} from './models/Search.js';
import {Recipe} from './models/Recipe.js';

 // control state of app
const state = {};

//*** 1 - controlSearch async function ***
const controlSearch = async ()=>{

    // get query from the view
    const query = searchView.getInput();

    // If query success then return results
    if(query!==''){
        console.log(`search initiated!`);
        // add this new search object to the state. state.search is a new instance of the Search Class.
            state.search = new Search(query);
      
        // create loading spinner and clear results from search form and div if present
            clearContents(elements.loading);
            elements.searchForm.reset();
            searchView.clearResults();
            renderLoader(elements.loading,query);

        // search for recipes.
            await state.search.getResults();
        // we have awaited for the results, for the promise. Now where are the results actually stored? They are stored in the results property of Search. which for this instance is state.search.results.
        
        // must have search array length > 0
        if(state.search.results.length > 0){
                // clear the UI and loading spinner
                    searchView.clearResults();
                    clearContents(elements.loading);
             
                // render the search results to the UI.
                searchView.printResults(state.search.results);

                // scroll to the results section smoothly
                scrollView();

       }
       // no results found
       else{

            // clear the loader html.
           clearContents(elements.loading);
           searchView.printNoResult(query);

       }
      
       
    }
 
}

// event listener on controlSearch Function
document.querySelector('.search').addEventListener('submit',(e)=>{
    e.preventDefault();
    controlSearch();
})

//2 -- ** Recipe Controller */
const controlRecipe = async (e) =>{
     e.preventDefault();
     // event delegation on the controller
    if(e.target.classList.contains('recipe__button')){

        const id = e.target.dataset.id;
        if(id){
            try{

                // clear the previous results or state
                document.querySelector('.modal-content').innerHTML = '';

                 // create new recipe object.
                state.recipe = new Recipe(id);
                await state.recipe.getSingleRecipe();

                // calculate servings
                state.recipe.calcTime();

               // render recipe
               console.log(state.recipe);
               recipeView.renderRecipe(state.recipe);

            }
            catch(err){
                alert('error processing recipe!');
            }
           
        }
        
    }
  
}
// event listener on the recipe controller
elements.results.addEventListener('click',controlRecipe);
